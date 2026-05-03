export interface Advantage {
  id: string;
  advantageName: string;
  advantageInfo: string;
}

export const advantages: Advantage[] = [
  {
    id: "practice",
    advantageName: "Практика, а не вода",
    advantageInfo:
      "Навчимо зварити правильний еспресо, збити молоко — і не зламати машину. Мінімум теорії, максимум реального часу за барестійкою.",
  },
  {
    id: "understanding",
    advantageName: "Розуміння зерна",
    advantageInfo:
      "Навчимо розуміти каву: її походження, обжарку, дескриптори. Ти будеш знати, чому одна кава кисла, а інша — солодка.",
  },
  {
    id: "pro-knowledge",
    advantageName: "Професійні знання",
    advantageInfo:
      "Теорія та практика від досвідчених майстрів. Ти дізнаєшся все, що потрібно для старту кар'єри або власної кав'ярні.",
  },
  {
    id: "service",
    advantageName: "Сервіс та гостинність",
    advantageInfo:
      "Як спілкуватися з гостями, щоб вони поверталися не лише за кавою. Ми вчимо не просто варити — а створювати атмосферу.",
  },
];
