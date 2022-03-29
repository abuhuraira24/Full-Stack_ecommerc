import * as Types from "../../types/authActions/types";

const init = {
  user: {},
  error: {},
  isAuthenticated: false,
};

const loginReducer = (state = init, action) => {
  switch (action.type) {
    case Types.SET_USER:
      return {
        user: action.payload.user,
        isAuthenticated: Object.keys(action.payload.user).length !== 0,
      };
    case Types.LOGIN_ERROR:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
