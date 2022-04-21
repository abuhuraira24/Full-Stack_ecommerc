import Axios from "axios";

import * as Types from "../../types/types";

const token = localStorage.getItem("auth_token");

export const addNewProduct = (product) => (dispatch) => {
  console.log(product);

  Axios.post("/product/newproduct", product, {
    headers: {
      "Content-Types": "application/json",
      Authorization: token,
    },
  })
    .then((res) => {
      dispatch({
        type: Types.SET_PRODUCT_ERROR,
        payload: {
          error: {},
        },
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: Types.SET_PRODUCT_ERROR,
        payload: {
          error: error.response.data,
        },
      });
    });
};

export const getAllProduct = (id) => (dispatch) => {
  Axios.get(`/product/getallproduct/${id}`)
    .then((res) => {
      dispatch({
        type: Types.GET_ALL_PRODUCT,
        payload: {
          product: res.data.products,
        },
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deleteProduct = (id) => (dispatch) => {
  Axios.delete(`/product/deleteproduct/${id}`, {
    headers: {
      Authorization: token,
    },
  })
    .then((res) => {
      dispatch({
        type: Types.DELETE_PRODUCT,
        payload: {
          id: id,
        },
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
