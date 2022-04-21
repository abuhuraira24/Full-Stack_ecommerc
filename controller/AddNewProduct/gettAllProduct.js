const AddNewProductSchema = require("../../model/ProductModel/ProductSchema");

const User = require("../../model/userSchema");

const { unlink } = require("fs");
const { json } = require("body-parser");

module.exports = {
  gettAllProduct(req, res) {
    const { userId } = req.params;

    AddNewProductSchema.find({ author: userId })
      .then((product) => {
        res.status(200).json({
          products: product,
        });
      })
      .catch((error) => {
        console.log(error.message);
        res.status(500).json({
          message: "There was an server Error!",
        });
      });
  },
  deleteProduct(req, res) {
    const { productId } = req.params;

    const user_id = req.user._id;
    AddNewProductSchema.findOneAndDelete(productId)
      .then((result) => {
        const updatedUserDta = { ...req.user._doc };

        updatedUserDta.pendingNumber = updatedUserDta.pendingNumber - 1;

        User.findByIdAndUpdate(user_id, { $set: updatedUserDta }, { new: true })
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.log(error);
          });
        res.status(200).json({
          message: "Deleted",
        });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          message: "There was an Server ERROR!",
        });
      });
  },

  getPublishedProduct(req, res) {
    AddNewProductSchema.find({ pending: true })
      .then((product) => {
        if (product.length === 0) {
          return res.status(404).json({
            message: "Not Found Product!",
          });
        } else {
          return res.status(200).json({
            data: product,
          });
        }
      })
      .catch((error) => {
        res.status(500).json({
          message: "There was an server Error",
        });
      });
  },

  searchProduct(req, res) {
    const productName = req.body.productName;
    AddNewProductSchema.find({ productName: productName })
      .then((data) => {
        res.status(200).json({
          message: data,
        });
      })
      .catch((error) => {
        console.log(error.message);
        res.status(500).json({
          message: "Server Error Occurred!",
        });
      });
  },
  editProduct(req, res) {
    const productId = req.params.productId;

    AddNewProductSchema.find({ _id: productId })
      .then((product) => {
        console.log(product);
        if (product.length === 0) {
          return res.status(404).json({
            message: "Product Not Found!",
          });
        } else {
          return res.status(200).json({
            product: "kdfdf",
          });
        }
      })
      .catch((error) => {
        res.status(500).json({
          message: "There was an server Error!",
        });
      });
  },
};
