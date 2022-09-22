import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { commonReducer } from "./users/reducer";

export type RootState = ReturnType<typeof combinedReducer>;

const combinedReducer = combineReducers({
  common: commonReducer,
});

const composeEnhancers = composeWithDevTools({});

export const store = createStore(
  combinedReducer,
  {},
  composeEnhancers(applyMiddleware(thunk)),
);

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
