const router = require("express").Router();

const {
  register,
  login,
  getUserData,
} = require("../controller/userController");

router.post("/register", register);
router.post("/login", login);
router.get("/getuserdata/:userId", getUserData);
module.exports = router;
