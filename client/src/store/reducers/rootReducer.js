import { combineReducers } from "redux";

import shopReducer from "./shopping/shopping-reducer";

import authReducer from "./authReducer/authReducer";

import loginReducer from "./authReducer/loginReducer";

import { addNewProduct } from "./addNewProduct/addNewProduct";

import { getUserData } from "./authReducer/getUserData";

import getAllProduct from "../../store/reducers/addNewProduct/getAllProduct";

const rootReducer = combineReducers({
  shop: shopReducer,
  auth: authReducer,
  login: loginReducer,
  addNewProduct: addNewProduct,
  getUserData: getUserData,
  getAllProduct: getAllProduct,
});

export default rootReducer;
