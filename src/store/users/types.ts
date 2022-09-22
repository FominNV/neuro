export interface ICommonState {
  pageTitle: string
}

export enum PageTitle {
  ABOUT = "Neuro / About",
  DOCTORS = "Neuro / Doctors",
  SERVICES = "Neuro / Services",
  PRICES = "Neuro / Prices",
  BASE = "Neuro / Base",
  SHOP = "Neuro / Shop",
  CONTACTS = "Neuro / Contacts",
}

export enum CommonActionTypes {
  SET_PAGE_TITLE = "SET_PAGE_TITLE",
}

export type SetPageTitleType = (pageTitle: PageTitle) => void;

type SetPageTitleAction = {
  type: CommonActionTypes.SET_PAGE_TITLE,
  payload: { pageTitle: PageTitle; };
};

export type CommonAction = SetPageTitleAction;
