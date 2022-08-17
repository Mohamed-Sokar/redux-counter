import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Counter from "./Counter";
import "./Index.css";
import { counterAppStore } from "./redux-store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={counterAppStore}>
    <Counter />
  </Provider>
);
