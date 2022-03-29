const router = require("express").Router();

const getallproduct = require("../../controller/AddNewProduct/gettAllProduct");

router.get("/getallproduct", getallproduct);

module.exports = router;
