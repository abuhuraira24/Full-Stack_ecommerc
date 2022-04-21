const router = require("express").Router();

const uploader = require("../../fileUpload/uploader");

const { updateProduct } = require("../../controller/AddNewProduct/product");

const {
  gettAllProduct,
  deleteProduct,
  getPublishedProduct,
  searchProduct,
  editProduct,
} = require("../../controller/AddNewProduct/gettAllProduct");

const authenticate = require("../../authenticate");
router.get("/getallproduct/:userId", gettAllProduct);
router.delete("/deleteproduct/:productId", authenticate, deleteProduct);

router.put(
  "/updatedproduct/:productId",
  uploader.single("avatar"),
  updateProduct
);

router.get("/getpublished", getPublishedProduct);
router.get("/searchproduct/", searchProduct);
router.get("/editproduct/:productId", editProduct);
module.exports = router;
