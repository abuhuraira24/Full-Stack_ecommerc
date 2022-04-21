const AddNewProductSchema = require("../../model/ProductModel/ProductSchema");

const { unlink } = require("fs");

const productValidator = require("../../validations/ProductValidator/productValidator");

const path = require("path");

const User = require("../../model/userSchema");

module.exports = {
  addNewProduct(req, res) {
    const { productName, price, discount, sortDesc, categorie, desc } =
      req.body;

    const userId = req.user._id;
    const validator = productValidator({
      productName,
      price,
      discount,
      sortDesc,
      categorie,
      desc,
    });

    const filename = req.fileName;

    if (!validator.isValid) {
      if (filename) {
        unlink(
          path.join(
            __dirname +
              `../../../../foodex/client/src/assets/images/${filename}`
          ),
          (error) => {
            if (error) {
              return console.log(error.message);
            }
          }
        );
      }
      return res.status(400).json(validator.error);
    }

    const avatar = req.fileName;

    const newData = new AddNewProductSchema({
      productName,
      price,
      discount,
      sortDesc,
      categorie,
      desc,
      avatar,
      totalProduct: 0,
      live: 0,
      offline: 0,
      pendingReview: 0,
      pending: true,
      pendingReview: 0,
      author: userId,
    });

    newData
      .save()
      .then((product) => {
        const updatedUser = { ...req.user._doc };

        updatedUser.pendingNumber = updatedUser.pendingNumber + 1;
        updatedUser.transactions.unshift(product._id);

        User.findByIdAndUpdate(userId, { $set: updatedUser }, { new: true })
          .then((result) => {})
          .catch((error) => {
            console.log(error);
          });

        res.status(200).json({
          message: "Successfully Added Your New Product",
        });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          message: "Server error occured to save data",
        });
      });
  },
  updateProduct(req, res) {
    console.log(`body ${req.body}`);
    const productId = req.params.productId;
    AddNewProductSchema.find({ _id: productId })
      .then((result) => {
        res.status(200).json({
          message: result,
          body: req.body,
        });
      })
      .catch((error) => {
        res.status(500).json({
          message: "Server error occured to save data",
        });
      });
  },
};
