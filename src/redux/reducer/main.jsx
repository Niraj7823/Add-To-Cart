import { combineReducers } from "redux";
import { cartReducer } from "./reducer";
import userReducer from "../reducer/userReducer";

const rootred = combineReducers({
  cartReducer,
  userReducer,
});
export default rootred;
