const JwtStrategy = require("passport-jwt").Strategy;

const ExtractJwt = require("passport-jwt").ExtractJwt;

const User = require("./model/userSchema");

const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

opts.secretOrKey = "SECRET";

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, (payload, done) => {
      console.log(`paylodd ${payload}`);
      User.findOne({ _id: payload._id })
        .then((user) => {
          console.log(user);
          if (!user) {
            return done(null, false);
          } else {
            return done(null, user);
          }
        })
        .catch((error) => {
          console.log(error);
          return done(error);
        });
    })
  );
};
