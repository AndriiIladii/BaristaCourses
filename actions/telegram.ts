"use server";

import { formSchema, type FormValues } from "@/lib/validations/schema";
import { courses } from "@/data/courses";
import { headers } from "next/headers";

const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000;
const MAX_REQUESTS = 3;

export async function sendLeadToTelegram(data: FormValues) {
  const ip = (await headers()).get("x-forwarded-for") || "unknown";
  const now = Date.now();
  const userRate = rateLimitMap.get(ip);

  if (userRate) {
    if (now - userRate.timestamp < RATE_LIMIT_WINDOW) {
      if (userRate.count >= MAX_REQUESTS) {
        return {
          success: false,
          error: "Занадто багато запитів. Зачекайте хвилину.",
        };
      }
      userRate.count++;
    } else {
      rateLimitMap.set(ip, { count: 1, timestamp: now });
    }
  } else {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
  }

  if (rateLimitMap.size > 1000) {
    const timeLimit = now - RATE_LIMIT_WINDOW;
    for (const [key, value] of rateLimitMap.entries()) {
      if (value.timestamp < timeLimit) {
        rateLimitMap.delete(key);
      }
    }
  }

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
