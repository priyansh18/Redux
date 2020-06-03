import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer); //Higher order Function

export default store;
