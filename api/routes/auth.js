const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middleware/auth");
const passport = require("../config/passport");
const cors = require("cors");

// Custom middleware to extract the 'register' flag
const extractRegisterFlag = (req, res, next) => {
  console.log("extracted flag from middleware");
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
  getTokenForGoogle,
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
  (req, res, next) => {
    try {
      console.log("accesed /google");
      // res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
      // res.setHeader("Access-Control-Allow-Credentials", "true");
      // res.setHeader("Access-Control-Max-Age", "1800");
      // res.setHeader("Access-Control-Allow-Headers", "content-type");
      // res.setHeader(
      //   "Access-Control-Allow-Methods",
      //   "PUT, POST, GET, DELETE, PATCH, OPTIONS"
      // );
      next();
    } catch (err) {
      console.log(err);
    }
  },
  extractRegisterFlag,
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// This route is accessed after authentication
router.get(
  "/google/callback",
  (req, res, next) => {
    try {
      console.log("accesed /google/callback");
      // res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
      // res.setHeader("Access-Control-Allow-Credentials", "true");
      // res.setHeader("Access-Control-Max-Age", "1800");
      // res.setHeader("Access-Control-Allow-Headers", "content-type");
      // res.setHeader(
      //   "Access-Control-Allow-Methods",
      //   "PUT, POST, GET, DELETE, PATCH, OPTIONS"
      // );
      next();
    } catch (err) {
      console.log(err);
    }
  },
  passport.authenticate("google", {
    failureRedirect: "/api/auth/googlefailure",
  }),
  googleLogin
);

// Get token for google logins
router.get("/gettokenforgoogle", getTokenForGoogle);

// Dummy
router.get("/google/dummy", (req, res) => {
  const register = req.query.register;
  console.log("dummy route accessed.");
  res.redirect(`/api/auth/google?register=${register}`);
});

module.exports = router;
