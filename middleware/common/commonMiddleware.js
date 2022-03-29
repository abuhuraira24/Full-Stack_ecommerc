const errorMiddleware = (error, req, res, next) => {
  console.log(error.message);
  res.status(500).json({
    message: "Server side error",
  });
  res.end();
};

module.exports = errorMiddleware;
