const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const registerShema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  shopName: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
  },
  sales: Number,
  earning: Number,
  order: Number,
  totall: Number,
  complete: Number,
  pendingNumber: Number,
  processing: Number,
  cancelled: Number,
  Refounded: Number,
  Pageview: Number,
  transactions: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "Transaction",
      },
    ],
  },
});

const User = mongoose.model("User", registerShema);

module.exports = User;
