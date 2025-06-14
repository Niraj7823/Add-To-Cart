import { createStore, applyMiddleware } from "redux";
import rootred from "./redux/reducer/main";
import { thunk } from "redux-thunk";

const store = createStore(rootred, applyMiddleware(thunk));

export default store;
