const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middleware/auth");


const {
    addHistory,
    getHistory
} = require("../controllers/history");

router.post("/add", authMiddleware, addHistory);
router.get("/get", authMiddleware, getHistory);

module.exports = router;
