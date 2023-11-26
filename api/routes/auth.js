const express = require("express");
const router = express.Router();
const authMiddleware = require('../middleware/auth');

const { register, login, loginHelper } = require("../controllers/auth");

router.route("/register").post(register);
router.post("/login", login, loginHelper );
// router.route("/forgotpassword").post(forgotpassword);
// Example protected route (middleware ensures that the user is authenticated)
router.get('/protected', authMiddleware, (req, res) => {
    console.log("Private route accessed !")
    res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;
