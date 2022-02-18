import * as actionTypes from "../../types/shoppingTypes/shoppingType";

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
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemId,
    },
  };
};

export const removeFromCart = (itemId) => {
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
    payload: {
      val: value,
    },
  };
};

export const sofaItems = (value) => {
  return {
    type: actionTypes.SOFA_ITEMS,
    payload: {
      val: value,
    },
  };
};

export const showDetailsShop = (itemId) => {
  alert("action");
  return {
    type: "SHOW_DETAILS",
    payload: {
      id: itemId,
    },
  };
};

export const handleSearch = (val) => {
  return {
    type: "HANDLE_SEARCH",
    payload: {
      value: val,
    },
  };
};
