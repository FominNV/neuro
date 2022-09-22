import { CommonActionTypes, SetPageTitleType } from "./types";

export const setPageTitle: SetPageTitleType = (pageTitle) => ({
  type: CommonActionTypes.SET_PAGE_TITLE,
  payload: { pageTitle },
});
