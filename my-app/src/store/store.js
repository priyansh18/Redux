import { createStore } from "redux";
import reducer from "./bugs";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); //Higher order Function

export default store;
