const express = require("express");
const router = express.Router();
const authMiddleware = require('../middleware/auth');

const { register, login } = require("../controllers/auth");

router.route("/register").post(register);
router.route("/login").post(login);
// router.route("/forgotpassword").post(forgotpassword);
// Example protected route (middleware ensures that the user is authenticated)
router.get('/protected', authMiddleware, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.userData });
});

module.exports = router;
