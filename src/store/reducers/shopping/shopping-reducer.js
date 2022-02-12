import * as actionTypes from "../../types/shoppingTypes/shoppingType";

// product Images vastable
import elm from "../../../assets/images/Elm.png";
import jama from "../../../assets/images/jama.jpeg";
import oak from "../../../assets/images/Oak.png";
import sofa from "../../../assets/images/sofa.png";
import mahogany from "../../../assets/images/Mahogany.png";
import soffa3 from "../../../assets/images/soffa3.png";

const INITIALSTATE = {
  products: [
    {
      id: "0",
      title: "Face wash",
      desc: "Blhhhhhhh",
      price: "20.00",
      catagorie: "bed",
      img: elm,
      pc: "1",
    },
    {
      id: "1",
      title: "Face wash",
      desc: "Blhhhhhhh",
      price: "10.85",
      catagorie: "sofa",
      img: sofa,
      pc: "2",
    },
    {
      id: "2",
      title: "Face wash",
      desc: "Blhhhhhhh",
      price: "15.00",
      catagorie: "bed",
      img: oak,
      pc: "4",
    },
    {
      id: "3",
      title: "Face wash",
      desc: "Blhhhhhhh",
      price: "15.00",
      catagorie: "sofa",
      img: sofa,
      pc: "4",
    },
    {
      id: "4",
      title: "Face wash",
      desc: "Blhhhhhhh",
      price: "15.00",
      img: soffa3,
      pc: "4",
    },
    {
      id: "5",
      title: "Face wash",
      desc: "Blhhhhhhh",
      price: "15.00",
      catagorie: "bed",
      img: mahogany,
      pc: "4",
    },
    {
      id: "6",
      title: "Face wash",
      desc: "Blhhhhhhh",
      price: "15.00",
      catagorie: "sofa",
      img: jama,
      pc: "4",
    },
  ],

  allProduct: [],

  // id, title, des, img etc
  cart: [], // id, title, des, img, qty
  currentItem: null,
  filter: "all",
};

const shopReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Get the item data from the products array
      const item = state.products.find(
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
      console.log(action.payload.id);
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
      return {
        ...state,
        allProduct: state.products.filter(
          (item) => item.catagorie === action.payload.val
        ),
      };
    case actionTypes.SOFA_ITEMS:
      alert("Hii");
      console.log("sofa");
      return {
        ...state,
        allProduct: state.products.filter(
          (item) => item.catagorie === action.payload.val
        ),
      };
    default:
      return state;
  }
};

export default shopReducer;
