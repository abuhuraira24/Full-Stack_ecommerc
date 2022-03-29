import * as Types from "../../types/authActions/types";

const init = {
  error: {},
};

const authReducer = (state = init, action) => {
  switch (action.type) {
    case Types.SET_ERRORS:
      return {
        error: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
