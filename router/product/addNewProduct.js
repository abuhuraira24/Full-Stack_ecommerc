const adminRouter = require("express").Router();

const { addNewProduct } = require("../../controller/AddNewProduct/product");

const errorMiddleware = require("../../middleware/common/commonMiddleware");

const upload = require("../../fileUpload/uploader");

adminRouter.use(errorMiddleware);

const authenticate = require("../../authenticate");

adminRouter.post(
  "/newproduct",
  authenticate,
  upload.single("avatar"),
  addNewProduct
);

module.exports = adminRouter;
