const jwt = require("jsonwebtoken");
const User = require("../models/User");
// const ErrorResponse = require("../utils/errorResponse");

exports.authMiddleware = async (req, res, next) => {
  let token;

  // Check if the token is present in the "Authorization" header\
  console.log(req.headers)
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  // If token not found in the header, check the "accessToken" cookie
  if (!token && req.cookies?.accessToken) {
    console.log("Found token in cookies");
    token = req.cookies.accessToken;
  }

  if (!token) {
    console.log("Couldn't find token.");
    return res.status(401).json({ message: "Not allowed to access this route." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) {
        return res.status(404).json({ message: 'No user found with this id.' });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Not allowed to access this route." });
  }
};
