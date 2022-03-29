const express = require("express");

const app = express();

const passport = require("passport");

const router = require("./router/userRouter");

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const morgan = require("morgan");

const cors = require("cors");

app.use(bodyParser.json());

app.use(morgan("dev"));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
require("./passport")(passport);

app.use("/user/", require("./router/userRouter"));

app.use("/product", require("./router/product/addNewProduct"));
app.use("/product", require("./router/product/gettAllProduct"));
const PORT = 4000;
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome",
  });
});

app.listen(PORT, () => {
  console.log(`Server is Running On ${PORT}`);
  mongoose.connect("mongodb://localhost:27017/foodex");
});
