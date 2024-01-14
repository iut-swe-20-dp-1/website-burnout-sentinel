const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Helper functions

const removePassword = (user) => {
  const { password, ...userWithoutPass } = user;
  return userWithoutPass;
};

const generateAccessToken = (user) => {
  const userWithoutPass = removePassword(user);
  return jwt.sign(userWithoutPass, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION,
  });
};

// Register a new user
exports.register = async (req, res) => {
  try {
    const { fullName, dob, gender, email, username, password } = req.body;

    // Check if the username already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already Registered." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      fullName,
      dob,
      gender,
      email,
      username,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Login user
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check the password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const expiresIn = process.env.JWT_EXPIRATION;

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: expiresIn,
    });
    const user_info = user.toObject();
    const response = {
      success: true,
      token,
      user: user_info,
    };
    req.user = user_info;
    res.cookie("accessToken", token, { httpOnly: true });
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.loginHelper = async (req, res) => {
  res.status(200).json(req.user);
};

exports.logout = async (req, res) => {
  // Clear the accessToken cookie
  res.clearCookie("accessToken");
  res.status(200).json("Sucessfully logged out.");
};

// Google Authentication failed
exports.googleFailure = async (req, res) => {
  res.status(401).json({ message: "Google Authentication Failed" });
};

exports.googleLogin = async (req, res) => {
  console.log("googleLogin in controllers accessed!");
  try {
    const googleProfile = req.user;
    console.log("Google Profile: ", googleProfile);
    // Check if the user already exists in your database
    const user = await User.findOne({ googleId: googleProfile.googleId });

    const user_object = user.toObject();

    const accessToken = generateAccessToken(user_object);

    const userWithoutPass = removePassword(user_object);

    const response = {
      success: true,
      user: userWithoutPass,
      accessToken,
    };
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
