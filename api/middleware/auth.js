const jwt = require("jsonwebtoken");
const User = require("../models/User");
// const ErrorResponse = require("../utils/errorResponse");

module.exports = async (req, res, next) => {
  let token;

  // Check if the token is present in the "Authorization" header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  // If token not found in the header, check the "accessToken" cookie
  if (!token && req.cookies?.accessToken) {
    token = req.cookies.accessToken;
  }

  if (!token) {
    console.log("Couldn't find token.");
    return res.status(401).json({ message: "Not allowed to access this route." });
  }

  try {
    const decoded = jwt.verify(token, "your-secret-key");
    req.userData = decoded;
    next();

    // const decoded1 = jwt.verify(token, process.env.JWT_SECRET);
    // const user = await User.findById(decoded1.id);
    // if (!user) {
    //     console.log(error)
    //     res.status(404).json({ message: 'No user found with this id.' });
    // }
    // req.user = user;
    // next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Not allowed to access this route." });
  }
};
