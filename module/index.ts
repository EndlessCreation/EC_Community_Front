import { combineReducers } from "redux";
import { penderReducer } from "redux-pender";
import auth from "./auth";

const rootReducer = combineReducers({
  auth,
  pender: penderReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
