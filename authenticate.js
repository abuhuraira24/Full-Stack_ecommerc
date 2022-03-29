const passport = require("passport");

module.exports = (req, res, next) => {
  console.log(req.headers);

  passport.authenticate("jwt", (err, user, info) => {
    if (err) {
      console.log(info);
      console.log(err);
      return next(err);
    }

    if (!user) {
      return res.status(400).json({
        message: "Authentication Failed",
      });
    }

    req.user = user;
    return next();
  })(req, res, next);
};
