const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const createStore = (reducer) => {

};

const store = createStore(counter);

const render = () => {
  document.body.innerText = store.getState();
};

store.subscribe(render); // subscribe to any state changes
render(); // render initial state

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' }); // 1
});
