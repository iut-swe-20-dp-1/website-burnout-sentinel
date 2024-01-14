const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middleware/auth");


const {
    updateProfile,
    getInfo
} = require("../controllers/profile");

router.post("/update", authMiddleware, updateProfile);
router.post("/get", authMiddleware, getInfo);

module.exports = router;
