function createStore() {
  let state; //Private Property

  function getState() {
    return state;
  }

  return { getState };
}

export default createStore();
