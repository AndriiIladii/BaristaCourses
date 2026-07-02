import type { Course } from "@/types";

export const courses: Course[] = [
  {
    id: "basic-barista",
    courseName: "Базовий курс",
    courseSubname: "Бариста з нуля",
    duration: "3 дні",
    forWho: "Новачки без досвіду",
    abilities: [
      "Що таке бариста, знайомство з професією",
      "Види кави, арабіка vs робуста",
      "Обладнання кав'ярні",
      "Еспресо: теорія, параметри, помел",
      "Молоко, мікропіна, основи лате-арту",
      "Сервіс і спілкування з гостями",
      "Тестування + сертифікат",
    ],
    price: 7900,
    isFeatured: true,
  },
  {
    id: "cold-coffee-lab",
    courseName: "Cold Coffee Lab",
    courseSubname: "Майстерність холодних напоїв",
    duration: "1 день",
    forWho: "Бариста, власники кав'ярень",
    abilities: [
      "Cold brew, iced latte, espresso tonic",
      "Лимонади та коктейлі без кави",
      "Нітро, флеш-брю, iced milk",
      "Стильна подача, робота з льодом",
      "Баланс смаку, текстур і температур",
      "Практика + сертифікат",
    ],
    price: 3400,
  },
  {
    id: "latte-art-flow",
    courseName: "Latte Art Flow",
    courseSubname: "Сучасне молочне мистецтво",
    duration: "1–2 дні",
    forWho: "Новачки та діючі бариста",
    abilities: [
      "Основи латте-арту, молоко",
      "Вплив білків / жирів / вуглеводів",
      "Техніка наливання",
      "Free-pour (pitching) vs Etching",
      "Патерни та малюнки",
      "Практика + фідбек + сертифікат",
    ],
    price: 4100,
  },
];
