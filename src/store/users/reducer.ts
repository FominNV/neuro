import {
  CommonAction, CommonActionTypes, ICommonState, PageTitle,
} from "./types";

const initialState: ICommonState = {
  pageTitle: PageTitle.SERVICES,
};

export function commonReducer(
  state: ICommonState = initialState,
  action: CommonAction,
): ICommonState {
  switch (action.type) {
    case CommonActionTypes.SET_PAGE_TITLE:
      return {
        ...state,
        pageTitle: action.payload.pageTitle,
      };

    default:
      return state;
  }
}
