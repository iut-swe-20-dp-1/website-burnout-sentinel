const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middleware/auth");
const passport = require("../config/passport");

const {
  register,
  login,
  loginHelper,
  logout,
  googleFailure,
  googleLogin,
} = require("../controllers/auth");

router.route("/register").post(register);
router.post("/login", login, loginHelper);
// router.route("/forgotpassword").post(forgotpassword);
router.get("/logout", logout);

router.get("/protected", authMiddleware, (req, res) => {
  console.log("Private route accessed !");
  res.json({ message: "This is a protected route", user: req.user });
});

router.get("/googlefailure", googleFailure);
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
); // Use this to start authentication using google
router.get(
  "/google/callback", // This route is accessed after authentication
  passport.authenticate("google", {
    failureRedirect: "api/auth/googlefailure",
  }),
  googleLogin
);

module.exports = router;
