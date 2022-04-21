const bcrypt = require("bcrypt");

const userValidator = require("../validations/userValidator");

const User = require("../model/userSchema");

const { serverError, resourcError } = require("../utils/error");

const loginValidator = require("../validations/loginValidation");

const jwt = require("jsonwebtoken");

module.exports = {
  register(req, res) {
    const { email, password, firstName, lastName, shopName, phoneNumber } =
      req.body;

    const userValidity = userValidator({
      email,
      password,
      firstName,
      lastName,
      shopName,
      phoneNumber,
    });

    if (!userValidity.isValide) {
      return res.status(400).json(userValidity.error);
    } else {
      User.findOne({ email })
        .then((user) => {
          if (user) {
            return resourcError(res, "Email Already Exist!");
          }
          bcrypt.hash(password, 10, (error, hash) => {
            if (error) {
              console.log(error);
            }
            let newUser = new User({
              email,
              password: hash,
              firstName,
              lastName,
              shopName,
              phoneNumber,
              newUserData: 0,
              earning: 0,
              order: 0,
              totall: 0,
              complete: 0,
              pendingNumber: 0,
              processing: 0,
              cancelled: 0,
              refounded: 0,
              pageview: 0,
              transactions: [],
            });

            newUser
              .save()
              .then((user) => {
                res.status(200).json({
                  message: "Register Successfull",
                  user,
                });
              })
              .catch((error) => {
                console.log(error);
                serverError(res, error);
              });
          });
        })
        .catch((error) => {
          serverError(res, error);
        });
    }
  },
  login(req, res) {
    const { email, password } = req.body;

    const validator = loginValidator({ email, password });
    console.log(`headerss ${req.headers.authentication}`);
    if (!validator.isValide) {
      return res.status(400).json(validator.error);
    } else {
      User.findOne({ email })
        .then((user) => {
          if (!user) {
            return resourcError(res, "User Not Found!");
          }
          bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
              return serverError(res, err);
            }
            if (!result) {
              return resourcError(res, "Your Password Doesn't Match!");
            }
            const token = jwt.sign(
              {
                _id: user._id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                shopName: user.shopName,
                phoneNumber: user.phoneNumber,
              },
              "SECRET",
              { expiresIn: "72h" }
            );

            res.status(200).json({
              message: "Login Successfully Done!",
              token: `Bearer ${token}`,
            });
          });
        })
        .catch((error) => {
          serverError(res, error);
        });
    }
  },
  getUserData(req, res) {
    let { userId } = req.params;

    User.findOne({ _id: userId })
      .then((data) => {
        const newUserData = {
          cancelled: data.cancelled,
          earning: data.earning,
          order: data.order,
          sales: data.sales,
          totall: data.totall,
          complete: data.complete,
          pendingNumber: data.pendingNumber,
          processing: data.processing,
          pendingReview: data.pendingReview,
        };
        res.status(200).json({
          userData: newUserData,
        });
      })
      .catch((error) => {
        res.status(500).json({
          message: "There was an server Error!",
        });
      });
  },
};
