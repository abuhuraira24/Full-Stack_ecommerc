const validator = require("validator");

const loginValidator = (user) => {
  let error = {};
  if (!user.email) {
    error.email = "Please Provide Your Name!";
  } else if (!validator.isEmail(user.email)) {
    error.email = "Please Provide An Valid Email!";
  }
  if (!user.password) {
    error.password = "Please Provide Your Password";
  }

  return {
    error,
    isValide: Object.keys(error).length === 0,
  };
};

module.exports = loginValidator;
