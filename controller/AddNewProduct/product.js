const AddNewProductSchema = require("../../model/ProductModel/ProductSchema");

const { unlink } = require("fs");

const productValidator = require("../../validations/ProductValidator/productValidator");

const path = require("path");

module.exports = {
  addNewProduct(req, res) {
    const { productName, price, discount, sortDesc, categorie, desc } =
      req.body;

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
      transactions: [],
    });

    newData
      .save()
      .then((product) => {
        res.status(200).json({
          message: "Successfully Added Your New Product",
          product,
        });
      })
      .catch((error) => {
        res.status(500).json({
          message: "Server error occured to save data",
        });
      });
  },
};
