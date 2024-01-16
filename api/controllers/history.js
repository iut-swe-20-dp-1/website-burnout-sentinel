const User = require("../models/User");
const History = require("../models/History");

exports.addHistory = async (req, res) => {
  try {
    const email = req.user.email;

    // Find the user from User schema using email
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Get the id and find that user's record in the history schema
    const userId = user._id;
    let userHistory = await History.findOne({ userId });

    // If there is no entry for that user in the history schema, create one
    if (!userHistory) {
      userHistory = new History({ userId, userHistory: [] });
    }

    // Take info from the req body and append it to the userHistory array
    const { score, classification, timestamp } = req.body;
    console.log("Got : ", req.body);
    userHistory.userHistory.push({ score, classification, timestamp });

    // Save the updated history
    await userHistory.save();

    return res.status(200).json({
      success: true,
      message: "User information updated successfully.",
      userHistory,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

exports.getHistory = async (req, res) => {
  try {
    const email = req.user.email;

    // Find the user from User schema using email
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Get the id and find that user's record in the history schema
    const userId = user._id;
    let userHistory = await History.findOne({ userId });

    // If there is no entry for that user in the history schema, create one
    if (!userHistory) {
      userHistory = new History({ userId, userHistory: [] });
      await userHistory.save();
    }

    // Send the user's history
    return res.status(200).json({ success: true, userHistory: userHistory.userHistory });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
