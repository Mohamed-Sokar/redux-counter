import { createStore } from "redux";
const initialState = { counter: 0, showCounter: false };

const counterReducer = (state = initialState, action) => {
  if (action.type === "Increment") {
    return {
      counter: state.counter + 1,
      showCounter: true,
    };
  } else if (action.type === "Decrement") {
    return {
      counter: state.counter - 1,
      showCounter: true,
    };
  } else if (action.type === "IncrementByValue") {
    return {
      counter: state.counter + action.amount,
      showCounter: true,
    };
  } else if (action.type === "UpdateCounterVisibility") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  } else {
    return state;
  }
};
export const counterStore = createStore(counterReducer);
