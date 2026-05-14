"use server";

import type { FormValues } from "@/components/schema";

export async function sendLeadToTelegram(data: FormValues) {
    const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TOKEN || !CHAT_ID) {
        throw new Error("Telegram credentials are not configured");
    }

    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    const message = `
🌟 <b>Нова заявка з сайту!</b> 🌟

👤 <b>Ім'я:</b> ${data.name}
🎓 <b>Курс:</b> ${data.courseId}
📞 <b>Контакт (${data.contactMethod}):</b> ${data.contactValue}
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
            throw new Error(`Telegram API Error: ${errorData.description || response.statusText}`);
        }

        return { success: true };
    } catch (error) {
        console.error("Error sending to Telegram:", error);
        return { success: false, error: "Failed to send message" };
    }
}
