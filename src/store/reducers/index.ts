import { AnyAction, combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

import counter from "./count";
import { CounterState } from "../types/state";

export interface ReducerStates {
  counter: CounterState;
}

const rootReducer = (state: ReducerStates, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        counter,
      });
      return combineReducer(state, action);
    }
  }
};
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
