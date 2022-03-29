import Axios from "axios";

import * as Types from "../../types/types";

export const addNewProduct = (product) => (dispatch) => {
  Axios.post("/product/newproduct", product, {
    headers: {
      "Content-Type": "*",
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
