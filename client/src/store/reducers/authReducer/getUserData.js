import * as Types from "../../types/authActions/types";

const init = {
  userData: [],
};

export const getUserData = (state = init, action) => {
  switch (action.type) {
    case Types.GET_USER_DATA:
      return {
        userData: action.payload.userdata,
      };

    default:
      return state;
  }
};
