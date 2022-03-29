const validator = require("validator");

const userValidator = (user) => {
  let error = {};
  console.log(user);
  if (!user.email) {
    error.email = "Please Provide Your Email!";
  } else if (!validator.isEmail(user.email)) {
    error.email = "Please Provide An Valid Email!";
  }
  if (!user.password) {
    error.password = "Please Provide Your Password";
  } else if (user.password.length < 6) {
    error.password = "Password Must Be Greater or Equal than 7";
  }

  if (!user.firstName) {
    error.firstName = "Please Provide Your First Name";
  }
  if (!user.lastName) {
    error.lastName = "Please Provide Your LastName";
  }
  if (!user.phoneNumber) {
    error.phoneNumber = "Please Provide Your Phone Number";
  }
  if (!user.shopName) {
    error.shopName = "Please Provide Your Shop Name";
  }

  return {
    error,
    isValide: Object.keys(error).length === 0,
  };
};

module.exports = userValidator;
