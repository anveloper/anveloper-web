import {
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { Action, AnyAction, Reducer } from "redux";
import logger from "redux-logger";
import rootReducer, { ReducerStates } from "./reducers";

import { persistReducer, persistStore } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "root",
  storage: storageSession,
  version: 1,
  whitelist: ["counter"],
};

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer as Reducer<ReducerStates, AnyAction>
);

const middleware = getDefaultMiddleware();
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

const makeStore = () => store;
export const persistor = persistStore(store);

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
