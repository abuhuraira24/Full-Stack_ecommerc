const adminRouter = require("express").Router();

const { addNewProduct } = require("../../controller/AddNewProduct/product");

const errorMiddleware = require("../../middleware/common/commonMiddleware");

const upload = require("../../fileUpload/uploader");

adminRouter.use(errorMiddleware);

adminRouter.post("/newproduct", upload.single("avatar"), addNewProduct);

module.exports = adminRouter;
