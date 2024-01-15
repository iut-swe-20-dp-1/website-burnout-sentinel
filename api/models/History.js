const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  userHistory: [
    {
      score: {
        type: Number,
        min: 0,
        max: 10,
        required: true
      },
      timestamp: {
        type: Date,
        default: Date.now,
        required: true
      }
    }
  ]
});

const History = mongoose.model("History", historySchema);

module.exports = History;
