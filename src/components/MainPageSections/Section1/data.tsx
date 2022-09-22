import { ReactComponent as Center } from "assets/icons/center.svg";
import { ReactComponent as Care } from "assets/icons/care.svg";
import { ReactComponent as Card } from "assets/icons/card.svg";
import { IInfoItem } from "./types";

export const dataInfoItems: IInfoItem[] = [
  {
    icon: <Center />,
    text1: "Медицинский неврологический центр — член общества нейрохирургов Екатеринбурга.",
    text2: "Наши врачи проводят уникальные операции, обучают коллег.",
  },
  {
    icon: <Care />,
    text1: "Работаем каждый день, с понедельника по воскресенье.",
    text2: "Имеем возможность принять вас в день обращения.",
  },
  {
    icon: <Card />,
    text1: "Помогаем в размещении в Екатеринбурге на период диагностики и лечения.",
    text2: "Выдаем больничные листы.",
  },
];
