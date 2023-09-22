import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./store/store";
import { Provider } from "react-redux";

const root = document.getElementById("root");
const appRoot = ReactDOM.createRoot(root);

appRoot.render(
  <Provider store={store}>
    <App />
  </Provider>
);