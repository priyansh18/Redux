import store from "./store";
import { bugAdded } from "./actions";

const unsubscribe = store.subscribe(() => {
  console.log("Store Changed", store.getState());
});

store.dispatch(bugAdded("Bug1"));

unsubscribe();

store.dispatch();

console.log(store.getState());
