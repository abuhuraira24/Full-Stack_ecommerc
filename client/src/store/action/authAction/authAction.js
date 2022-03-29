import Axios from "axios";

import * as Types from "../../types/authActions/types";

import jwt_decode from "jwt-decode";

export const register = (user, history) => (dispatch) => {
  Axios.post("/user/register", user)
    .then((res) => {
      dispatch({
        type: Types.SET_ERRORS,
        payload: {},
      });
      history.push("/login");
    })
    .catch((error) => {
      dispatch({
        type: Types.SET_ERRORS,
        payload: error.response.data,
      });
    });
};

export const login = (user, history) => (dispatch) => {
  Axios.post("/user/login", user)
    .then((response) => {
      let token = response.data.token;
      localStorage.setItem("auth_token", token);
      const decode = jwt_decode(token);
      dispatch({
        type: Types.SET_USER,
        payload: {
          user: decode,
        },
      });
      history.push("/dashboard");
    })
    .catch((error) => {
      console.log(error.response.data);
      dispatch({
        type: Types.LOGIN_ERROR,
        payload: error.response.data,
      });
    });
};

export const logout = (history) => {
  localStorage.removeItem("auth_token");
  return {
    type: Types.SET_USER,
    payload: {
      user: {},
    },
  };
};
