const mongoose = require("mongoose");

const addNewProductSchema = new mongoose.Schema({
  avatar: {
    type: String,
  },
  productName: {
    type: String,
    trim: true,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  discount: {
    type: Number,
    required: true,
    trim: true,
  },
  sortDesc: {
    type: String,
    required: true,
    trim: true,
  },
  categorie: {
    type: String,
    trim: true,
    required: true,
  },
  desc: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const AddNewProductSchema = new mongoose.model("Product", addNewProductSchema);

module.exports = AddNewProductSchema;
