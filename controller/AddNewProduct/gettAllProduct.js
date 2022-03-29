const gettAllProduct = (req, res, next) => {
  res.status(200).json({
    message: "Get All Product",
  });
};

module.exports = gettAllProduct;
