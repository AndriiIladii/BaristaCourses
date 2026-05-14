"use server";

import { formSchema, type FormValues } from "@/components/schema";
import { courses } from "@/data/courses";

export async function sendLeadToTelegram(data: FormValues) {
  const parsed = formSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, error: "Невалідні дані форми" };
  }

  const { name, courseId, contactMethod, contactValue } = parsed.data;

  const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!TOKEN || !CHAT_ID) {
    throw new Error("Telegram credentials are not configured");
  }

  const course = courses.find((c) => c.id === courseId);
  const courseName = course
    ? `${course.courseName} (${course.courseSubname})`
    : courseId;

  const contactMethodLabel: Record<string, string> = {
    phone: "Телефон",
    telegram: "Telegram",
    instagram: "Instagram",
  };

  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const message = `
🌟 <b>Нова заявка з сайту!</b> 🌟

👤 <b>Ім'я:</b> ${name}
🎓 <b>Курс:</b> ${courseName}
📞 <b>Контакт (${contactMethodLabel[contactMethod] ?? contactMethod}):</b> ${contactValue}
`;

  try {
    const response = await fetch(URI_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Telegram API Error Response:", errorData);
      throw new Error(
        `Telegram API Error: ${errorData.description || response.statusText}`,
      );
    }

    return { success: true };
  } catch (error) {
    console.error("Error sending to Telegram:", error);
    return { success: false, error: "Failed to send message" };
  }
}
