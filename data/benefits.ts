import { Coffee, Milk, Brain, Users } from "lucide-react";

import type { Benefit } from "@/types";

export const benefits: Benefit[] = [
  {
    id: "practice",
    benefitName: "Практика, а не вода",
    benefitInfo:
      "Навчимо зварити правильний еспресо, збити молоко — і не зламати машину. Мінімум теорії, максимум реального часу за барестійкою.",
    icon: Coffee,
  },

  {
    id: "understanding",
    benefitName: "Розуміння зерна",
    benefitInfo:
      "Навчимо розуміти каву: її походження, обжарку, дескриптори. Ти будеш знати, чому одна кава кисла, а інша — солодка.",
    icon: Milk,
  },
  {
    id: "pro-knowledge",
    benefitName: "Професійні знання",
    benefitInfo:
      "Теорія та практика від досвідчених майстрів. Ти дізнаєшся все, що потрібно для старту кар'єри або власної кав'ярні.",
    icon: Brain,
  },
  {
    id: "service",
    benefitName: "Сервіс та гостинність",
    benefitInfo:
      "Як спілкуватися з гостями, щоб вони поверталися не лише за кавою. Ми вчимо не просто варити — а створювати атмосферу.",
    icon: Users,
  },
];
