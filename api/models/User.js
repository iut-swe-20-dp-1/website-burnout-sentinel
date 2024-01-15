const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: false,
  },
  fullName: {
    type: String,
  },
  dob: {
    type: String,
  },
  gender: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
