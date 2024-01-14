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

  const isRegistration = req.user.register;

  try {

    if (isRegistration) {
      // Wants to register using google OAuth
      let user = await User.findOne({ googleId: req.user.googleId });

      if (!user) {
        // If the user doesn't exist, create a new user
        user = new User({
          googleId: req.user.googleId,
          fullName: req.user.fullName,
          email: req.user.email,
          username: req.user.username,
          password: req.user.password,
        });
        await user.save();
        res.status(201).json({ message: "User registered successfully" });
      } else {
        // user already exists.
        res.status(409).json({
          sucess: false,
          message: "User already exists, try logging in.",
        });
      }
    } else {
      // wants to login using google OAuth
      res.redirect(`/api/auth/gettokenforgoogle?googleId=${req.user.googleId}`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getTokenForGoogle = async (req, res) => {
  console.log("Getting Token for Google");
  try {
    if (req.query.googleId) {
      console.log("Found the googleId in the query param.");
    }
    const googleId = req.query.googleId;

    const user = await User.findOne({ googleId: googleId });
    if (!user) {
      return res.status(404).json({
        sucess: false,
        message: "User does not exist, try registering.",
      });
    }

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
