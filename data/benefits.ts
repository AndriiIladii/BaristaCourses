import { Coffee, Milk, Brain, Users } from "lucide-react";

import type { Benefit } from "@/types";

export const benefits: Benefit[] = [
  {
    id: "practice",
    BenefitName: "Практика, а не вода",
    BenefitInfo:
      "Навчимо зварити правильний еспресо, збити молоко — і не зламати машину. Мінімум теорії, максимум реального часу за барестійкою.",
    icon: Coffee,
    alt: "Іконка переваг",
  },

  {
    id: "understanding",
    BenefitName: "Розуміння зерна",
    BenefitInfo:
      "Навчимо розуміти каву: її походження, обжарку, дескриптори. Ти будеш знати, чому одна кава кисла, а інша — солодка.",
    icon: Milk,
    alt: "Іконка переваг",
  },
  {
    id: "pro-knowledge",
    BenefitName: "Професійні знання",
    BenefitInfo:
      "Теорія та практика від досвідчених майстрів. Ти дізнаєшся все, що потрібно для старту кар'єри або власної кав'ярні.",
    icon: Brain,
    alt: "Іконка переваг",
  },
  {
    id: "service",
    BenefitName: "Сервіс та гостинність",
    BenefitInfo:
      "Як спілкуватися з гостями, щоб вони поверталися не лише за кавою. Ми вчимо не просто варити — а створювати атмосферу.",
    icon: Users,
    alt: "Іконка переваг",
  },
];
