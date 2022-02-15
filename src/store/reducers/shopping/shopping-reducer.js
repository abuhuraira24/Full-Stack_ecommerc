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
      title: "Ash Double Bed",
      desc: "A table is an item of furniture with a flat top and one or more legs, used as a surface for working at, eating from or on which to place things.",
      price: "20.00",
      catagorie: "bed",
      img: elm,
      discount: 14,
      pc: "1",
    },
    {
      id: "1",
      title: "Aarya Yellow Single",
      desc: "a piece of furniture, also called a couch",
      price: "10.85",
      catagorie: "sofa",
      img: sofa,
      discount: 10,
      pc: "2",
    },
    {
      id: "2",
      title: "Fredd Single Bed",
      desc: "Bread is a staple food prepared from a dough of flour and water, usually by baking. Throughout recorded history it has been a prominent food in large parts of the world.",
      price: "15.00",
      catagorie: "bed",
      img: oak,
      discount: 24,
      pc: "4",
    },
    {
      id: "3",
      title: "Castlery Double Sofa",
      desc: "a piece of furniture, also called a couch",
      price: "15.00",
      catagorie: "sofa",
      img: sofa,
      discount: 34,
      pc: "4",
    },
    {
      id: "4",
      title: "Safari Ash Single Sofa",
      desc: "a piece of furniture, also called a couch",
      price: "15.00",
      catagorie: "sofa",
      discount: 4,
      img: soffa3,
      pc: "4",
    },
    {
      id: "5",
      title: "Alana Single Bed",
      desc: "A bed is a piece of furniture which is used as a place to sleep or relax.",
      price: "15.00",
      catagorie: "bed",
      img: mahogany,
      discount: 8,
      pc: "4",
    },
    {
      id: "6",
      title: "Aero Stylish Single Sofa",
      desc: "a piece of furniture, also called a couch",
      price: "15.00",
      catagorie: "sofa",
      img: jama,
      discount: 7,
      pc: "4",
    },
  ],

  allProduct: [],

  // id, title, des, img etc
  cart: [], // id, title, des, img, qty
  currentItem: null,
  filter: "all",
  isFalse: false,
  shopDetails: [],
  reletedShop: [],
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
      console.log(state.filter);
      return {
        ...state,

        allProduct: state.products.filter(
          (item) => item.catagorie === state.filter
        ),
        filter: action.payload.val,
      };
    case actionTypes.SOFA_ITEMS:
      console.log("sofa");
      return {
        ...state,
        allProduct: state.products.filter(
          (item) => item.catagorie === action.payload.val
        ),
      };

    case "SHOW_SHOP":
      const isOpen = state.isFalse;
      const filterShopDetails = state.products.filter(
        (item) => item.id === action.payload.id
      );

      return {
        ...state,
        isFalse: isOpen ? false : true,
        shopDetails: filterShopDetails,
      };
    default:
      return state;
  }
};

export default shopReducer;
