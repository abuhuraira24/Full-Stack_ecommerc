import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./index.scss";
import "../src/App.scss";
import "react-loading-skeleton/dist/skeleton.css";
import jwt_decode from "jwt-decode";
import * as Types from "../src/store/types/authActions/types";
import { Provider } from "react-redux";
import store from "./store/";

const token = localStorage.getItem("auth_token");

if (token) {
  const decode = jwt_decode(token);
  store.dispatch({
    type: Types.SET_USER,
    payload: {
      user: decode,
    },
  });
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
