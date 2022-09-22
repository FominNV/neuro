import { PageTitle } from "store/users/types";
import { ILink } from "./types";

export const dataLinks: ILink[] = [
  {
    title: "О КЛИНКЕ",
    pageTitle: PageTitle.ABOUT,
  },
  {
    title: "НАШИ ВРАЧИ",
    pageTitle: PageTitle.DOCTORS,
  },
  {
    title: "УСЛУГИ",
    pageTitle: PageTitle.SERVICES,
  },
  {
    title: "ЦЕНЫ",
    pageTitle: PageTitle.PRICES,
  },
  {
    title: "БАЗА ЗНАНИЙ",
    pageTitle: PageTitle.BASE,
  },
  {
    title: "МАГАЗИН",
    pageTitle: PageTitle.SHOP,
  },
  {
    title: "КОНТАКТЫ",
    pageTitle: PageTitle.CONTACTS,
  },
];
