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
import * as ActionTypes from "../src/store/types/shoppingTypes/shoppingType";

const token = localStorage.getItem("auth_token");
// const cartItems = JSON.parse(localStorage.getItem("cart_data"));

if (token) {
  const decode = jwt_decode(token);
  store.dispatch({
    type: Types.SET_USER,
    payload: {
      user: decode,
    },
  });
}

// if (cartItems) {
//   store.dispatch({
//     type: ActionTypes.ADD_TO_CART,
//     payload: {
//       cart: cartItems,
//     },
//   });
// }

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
