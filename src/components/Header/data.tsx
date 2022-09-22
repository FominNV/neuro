import { ReactComponent as Place } from "assets/icons/place.svg";
import { ReactComponent as Calendar } from "assets/icons/calendar.svg";
import { ReactComponent as Phone } from "assets/icons/phone.svg";
import { IHeaderItem } from "./types";

export const dataHeaderItems: IHeaderItem[] = [
  {
    icon: <Place />,
    href: "https://www.google.ru/maps/place/%D1%83%D0%BB.+%D0%A0%D0%B5%D0%BF%D0%B8%D0%BD%D0%B0,+68,+%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3,+%D0%A1%D0%B2%D0%B5%D1%80%D0%B4%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB.,+620043/@56.8207304,60.544754,18z/data=!4m13!1m7!3m6!1s0x43c16f08b01a15e3:0x16d60b367b095b57!2z0YPQuy4g0KDQtdC_0LjQvdCwLCA2OCwg0JXQutCw0YLQtdGA0LjQvdCx0YPRgNCzLCDQodCy0LXRgNC00LvQvtCy0YHQutCw0Y8g0L7QsdC7LiwgNjIwMDQz!3b1!8m2!3d56.8206761!4d60.5455345!3m4!1s0x43c16f08b01a15e3:0x16d60b367b095b57!8m2!3d56.8206761!4d60.5455345",
    text1: "Екатеринбург",
    text2: "ул. Репина, 68",
  },
  {
    icon: <Calendar />,
    href: "https://calendar.google.com/",
    text1: "Пн-Пт с 09:00 - 20:00",
    text2: "Сб-Вс с 09:00 - 14:00",
  },
  {
    icon: <Phone />,
    href: "tel:83432685148",
    text1: "8-343-268-51-48",
    text2: "8-343-268-51-58",
  },
];
