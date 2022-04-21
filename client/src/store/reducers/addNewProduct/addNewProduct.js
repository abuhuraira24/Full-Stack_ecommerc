import * as Types from "../../types/types";

const init = {
  products: {},
  error: {},
};

export const addNewProduct = (state = init, action) => {
  switch (action.type) {
    case Types.SE_NEW_PRODUCT:
      return {
        products: action.payload.product,
        error: {},
      };
    case Types.SET_PRODUCT_ERROR:
      return {
        error: action.payload.error,
      };

    default:
      return state;
  }
};
