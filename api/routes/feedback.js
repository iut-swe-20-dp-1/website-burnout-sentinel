const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middleware/auth");


const {
    sendFeedback,
    getFeedback
} = require("../controllers/feedback");

router.post("/send", authMiddleware, sendFeedback);
router.get("/get", getFeedback);

module.exports = router;
