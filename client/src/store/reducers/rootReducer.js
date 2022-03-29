import { combineReducers } from "redux";

import shopReducer from "./shopping/shopping-reducer";

import authReducer from "./authReducer/authReducer";

import loginReducer from "./authReducer/loginReducer";

import addNewProduct from "./addNewProduct/addNewProduct";

const rootReducer = combineReducers({
  shop: shopReducer,
  auth: authReducer,
  login: loginReducer,
  addNewProduct: addNewProduct,
});

export default rootReducer;
