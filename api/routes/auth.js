const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middleware/auth");
const passport = require("../config/passport");

// Custom middleware to extract the 'register' flag
const extractRegisterFlag = (req, res, next) => {
  req.session.register = req.query.register === "true";
  next();
};

const {
  register,
  login,
  loginHelper,
  logout,
  googleFailure,
  googleLogin,
  getTokenForGoogle
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

// Use this to start authentication using google
router.get(
  "/google",
  extractRegisterFlag,
  passport.authenticate("google", { scope: ["profile", "email"] })
); 

// This route is accessed after authentication
router.get(
  "/google/callback", 
  passport.authenticate("google", {
    failureRedirect: "/api/auth/googlefailure",
  }),
  googleLogin
);

// Get token for google logins
router.get("/gettokenforgoogle", getTokenForGoogle);

module.exports = router;
