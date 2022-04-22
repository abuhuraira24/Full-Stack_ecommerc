const express = require("express");

const app = express();

const addNewProduct = require("./router/product/addNewProduct");

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

app.use("/product", addNewProduct);
app.use("/product", require("./router/product/gettAllProduct"));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome",
  });
});
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is Running On ${PORT}`);
  // mongoose.connect("mongodb://localhost:27017/foodex");
  mongoose.connect(
    `mongodb+srv://${foodex24}:${foodex24}@cluster0.vtaxj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  );
});
