const User = require("../models/User");
const History = require("../models/History");

const getUserId = async (email) => {
  const user = await User.findOne({ email });

  if (!user) {
    return null; // Returning null if user not found
  }

  return user._id;
};


exports.addHistory = async (req, res) => {
  try {
    const email = req.user.email;
    const userId = await getUserId(email);

    if (!userId) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

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
    const userId = await getUserId(email);

    if (!userId) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    let userHistory = await History.findOne({ userId });

    // If there is no entry for that user in the history schema, create one
    if (!userHistory) {
      userHistory = new History({ userId, userHistory: [] });
      await userHistory.save();
    }

    // Sort the userHistory based on timestamp in descending order
    userHistory.userHistory.sort((a, b) => b.timestamp - a.timestamp);

    // Send the user's history
    return res.status(200).json({ success: true, userHistory: userHistory.userHistory });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

