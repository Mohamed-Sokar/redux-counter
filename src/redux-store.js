import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter-slice";

// export const counterAppStore = configureStore({counterReducer: counterSlice.reducer});
export const counterAppStore = configureStore({
  reducer: {
    counterReducer: counterReducer,
  },
});
