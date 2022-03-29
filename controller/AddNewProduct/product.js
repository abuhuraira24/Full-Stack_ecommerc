const AddNewProductSchema = require("../../model/ProductModel/ProductSchema");

const { unlink } = require("fs");

const productValidator = require("../../validations/ProductValidator/productValidator");

const path = require("path");

const decode = require("jwt-decode");

const User = require("../../model/userSchema");

module.exports = {
  addNewProduct(req, res) {
    const { productName, price, discount, sortDesc, categorie, desc } =
      req.body;

    // const token = req.headers.authorization;

    const decoded = decode(req.headers.authorization);

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
        unlink(path.join(__dirname, `../../upload/${filename}`), (error) => {
          if (error) {
            return console.log(error);
          }
        });
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
      author: decoded._id,
    });

    newData
      .save()
      .then((product) => {
        decoded.transactions.push(product._id);

        User.findByIdAndUpdate(decoded._id, { $set: decoded }, { new: true })
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.log(error);
          });

        res.status(200).json({
          message: "Successfully Added Your New Product",
          decoded,
        });
      })
      .catch((error) => {
        console.log(error.message);
        res.status(500).json({
          message: "Server error occured to save data",
        });
      });
  },
};
