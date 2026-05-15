import { z } from "zod";

export const formSchema = z
  .object({
    name: z.string().min(2, { message: "Ім'я надто коротке" }).max(20),
    courseId: z.string().min(1, { message: "Будь ласка, оберіть курс" }),
    contactMethod: z.enum(["phone", "telegram", "instagram"]),
    contactValue: z.string().min(3, { message: "Заповніть це поле" }),
  })
  .superRefine((data, ctx) => {
    if (data.contactMethod === "telegram") {
      if (!data.contactValue.startsWith("@")) {
        ctx.addIssue({
          code: "custom",
          message: "Нікнейм в Telegram має починатися з @",
          path: ["contactValue"],
        });
      }
    } else if (data.contactMethod === "phone") {
      const phoneRegex = /^\+\d{10,15}$/;
      const cleanPhone = data.contactValue.replace(/\s+/g, "");

      if (!phoneRegex.test(cleanPhone)) {
        ctx.addIssue({
          code: "custom",
          message: "Введіть коректний номер у форматі +380...",
          path: ["contactValue"],
        });
      }
    } else if (data.contactMethod === "instagram") {
      if (data.contactValue.includes(" ")) {
        ctx.addIssue({
          code: "custom",
          message: "Нікнейм в Instagram не може містити пробіли",
          path: ["contactValue"],
        });
      }
    }
  });

export type FormValues = z.infer<typeof formSchema>;
