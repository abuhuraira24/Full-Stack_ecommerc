import * as actionTypes from "../../types/shoppingTypes/shoppingType";
import toast from "react-hot-toast";
//====== Product request ========//
export const product_request = () => {
  return {
    type: actionTypes.PRODUCTS_REQUEST,
  };
};

export const product_data_success = (data) => {
  return {
    type: actionTypes.PRODUCT_DATA_SUCCESS,
    payload: data,
  };
};

export const faild_to_fetch = (error) => {
  return {
    type: actionTypes.FAILED_TO_FETCH,
    error: error,
  };
};

export const addToCart = (itemId) => {
  toast.success("Added To Wishlist", { duration: 4000 });
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemId,
    },
  };
};

export const removeFromCart = (itemId) => {
  toast.error("Removed From Wishlist");
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemId,
    },
  };
};

export const adJustQty = (itemId, value) => {
  return {
    type: actionTypes.ADJUST_QTY,
    payload: {
      id: itemId,
      qty: value,
    },
  };
};

export const loadCurrentItem = (itemId, value) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: {
      id: itemId,
      qty: value,
    },
  };
};

export const increment = (itemId) => {
  return {
    type: actionTypes.INCREMENT_NUMBER,
    payload: {
      id: itemId,
    },
  };
};
export const decrement = (itemId) => {
  return {
    type: actionTypes.DECREMENT_NUMBER,
    payload: {
      id: itemId,
    },
  };
};

export const bedItems = (value) => {
  return {
    type: actionTypes.BED_ITEMS,
    payload: value,
  };
};

export const woodItems = (value) => {
  return {
    type: actionTypes.WOOD_ITEMS,
    payload: value,
  };
};
export const phoneItems = (value) => {
  return {
    type: actionTypes.PHONE_ITEMS,
    payload: value,
  };
};
export const tableItems = (value) => {
  return {
    type: actionTypes.TABLE_ITEMS,
    payload: value,
  };
};
