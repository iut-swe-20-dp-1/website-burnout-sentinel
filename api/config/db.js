// Database connection setup

const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Mongo connected");
};

module.exports = connectDB;
