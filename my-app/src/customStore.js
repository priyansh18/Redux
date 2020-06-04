import reducer from "./reducer";

function createStore(reducer) {
  let state; //Private Property
  let listners = [];

  function subscribe(listner) {
    listners.push(listner);
  }

  function dispatch(action) {
    state = reducer(state, action);

    for (let i = 0; i < listners.length; i++) {
      listners[i]();
    }
  }

  function getState() {
    return state;
  }

  return { getState, dispatch, subscribe };
}

export default createStore(reducer);
