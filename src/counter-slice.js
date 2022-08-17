import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = { counter: 0, showCounter: false };

// Slice
let counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    incrementByValue(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleVisibility(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// Export
export const counterActions = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
