import {
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import {
  Action,
  AnyAction,
  applyMiddleware,
  Middleware,
  Reducer,
  StoreEnhancer,
} from "redux";
import logger from "redux-logger";
import rootReducer, { ReducerStates } from "./reducers";

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const makeStore = () => {
  const middleware = getDefaultMiddleware();
  if (process.env.NODE_ENV === "development") {
    middleware.push(logger);
  }
  const store = configureStore({
    reducer: rootReducer as Reducer<ReducerStates, AnyAction>,
    middleware,
    devTools: process.env.NODE_ENV === "development",
  });
  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;

const wrapper = createWrapper<AppStore>(makeStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
