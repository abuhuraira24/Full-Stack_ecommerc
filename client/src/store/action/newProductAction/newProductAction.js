import Axios from "axios";

import * as Types from "../../types/types";

const token = localStorage.getItem("auth_token");

export const addNewProduct = (product) => (dispatch) => {
  Axios.post("/product/newproduct", product, {
    headers: {
      "Content-Types": "application/json",
      Authorization: `${token.split(" ")[1]}`,
    },
  })
    .then((res) => {})
    .catch((error) => {
      dispatch({
        type: Types.SET_PRODUCT_ERROR,
        payload: {
          error: error.response.data,
        },
      });
    });
};
