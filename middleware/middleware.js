const midleware = (req, res, next) => {
  //   res.status(500).json({
  //     message: "  Sercer error occured!",
  //   });

  //   res.end();
  throw new Error("Thwere was an server error!");
};

module.exports = midleware;
