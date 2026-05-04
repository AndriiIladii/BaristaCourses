export interface Benefit {
  id: string;
  BenefitName: string;
  BenefitInfo: string;
  icon: string;
  alt: string;
}

export const benefits: Benefit[] = [
  {
    id: "practice",
    BenefitName: "Практика, а не вода",
    BenefitInfo:
      "Навчимо зварити правильний еспресо, збити молоко — і не зламати машину. Мінімум теорії, максимум реального часу за барестійкою.",
    icon: "/benefits-icons/benefit-1.svg",
    alt: "Іконка переваг",
  },

  {
    id: "understanding",
    BenefitName: "Розуміння зерна",
    BenefitInfo:
      "Навчимо розуміти каву: її походження, обжарку, дескриптори. Ти будеш знати, чому одна кава кисла, а інша — солодка.",
    icon: "/benefits-icons/benefit-2.svg",
    alt: "Іконка переваг",
  },
  {
    id: "pro-knowledge",
    BenefitName: "Професійні знання",
    BenefitInfo:
      "Теорія та практика від досвідчених майстрів. Ти дізнаєшся все, що потрібно для старту кар'єри або власної кав'ярні.",
    icon: "/benefits-icons/benefit-3.svg",
    alt: "Іконка переваг",
  },
  {
    id: "service",
    BenefitName: "Сервіс та гостинність",
    BenefitInfo:
      "Як спілкуватися з гостями, щоб вони поверталися не лише за кавою. Ми вчимо не просто варити — а створювати атмосферу.",
    icon: "/benefits-icons/benefit-4.svg",
    alt: "Іконка переваг",
  },
];
