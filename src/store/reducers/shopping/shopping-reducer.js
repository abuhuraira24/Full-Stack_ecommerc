import * as actionTypes from "../../types/shoppingTypes/shoppingType";

// product Images vastable

const INITIALSTATE = {
  allProduct: [],
  loading: false,
  data: [],
  // id, title, des, img etc
  cart: [], // id, title, des, img, qty
  currentItem: null,
  filter: "all",
  isFalse: false,
  shopDetails: [],
  reletedShop: [],
  searchTerm: "",
};

const shopReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case actionTypes.PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.PRODUCT_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case actionTypes.FAILED_TO_FETCH:
      return {
        ...state,
      };
    case actionTypes.ADD_TO_CART:
      // Get the item data from the products array
      const item = state.data.find(
        (product) => product.id === action.payload.id
      );

      // Check if cart is exist already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item
        ),
      };

    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };

    case actionTypes.INCREMENT_NUMBER:
      const increCart = state.cart.find((inCartQtr) =>
        inCartQtr.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: increCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { qty: 1 }],
      };

    case actionTypes.DECREMENT_NUMBER:
      const decreCart = state.cart.find((inCartQtr) =>
        inCartQtr.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: decreCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty - 1 }
                : item
            )
          : [...state.cart, { qty: 1 }],
      };
    case actionTypes.BED_ITEMS:
      console.log(state.filter);
      return {
        ...state,
        filter: action.payload.val,
      };

    case "SHOW_SHOP":
      const isOpen = state.isFalse;
      // const reletedShop = state.data.map((item) => item.c)
      const filterShopDetails = state.data.filter(
        (item) => item.id === action.payload.id
      );

      return {
        ...state,
        isFalse: isOpen ? false : true,
        shopDetails: filterShopDetails,
      };

    case "HANDLE_SEARCH":
      const val = action.payload.val;
      return {
        searchTerm: val,
      };
    default:
      return state;
  }
};

export default shopReducer;
