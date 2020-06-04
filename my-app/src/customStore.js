import reducer from "./reducer";

function createStore(reducer) {
  let state; //Private Property

  function dispatch(action) {
    state = reducer(state, action);
  }

  function getState() {
    return state;
  }

  return { getState, dispatch };
}

export default createStore(reducer);
