import * as Types from "../../types/types";
const init = {
  products: [],
  udatedProduct: [],
};

const getAllProduct = (state = init, action) => {
  switch (action.type) {
    case Types.GET_ALL_PRODUCT:
      // let productsItem = [...state];
      // console.log(productsItem);
      return {
        ...state,
        products: action.payload.product,
      };
    case Types.DELETE_PRODUCT:
      let productsItem = [...state.products];
      console.log(productsItem);
      return {
        ...state,
        products: productsItem.filter((item) => {
          return item._id !== action.payload.id;
        }),
      };

    case Types.GET_UPDATED_PRODUCT:
      return {
        udatedProduct: action.payload.udatedProduct[0],
      };
    default:
      return state;
  }
};

export default getAllProduct;
