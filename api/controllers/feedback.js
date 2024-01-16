const User = require("../models/User");
const Feedback = require("../models/Feedback");

// Utility function to get user ID by email
const getUserId = async (email) => {
  const user = await User.findOne({ email });

  if (!user) {
    return null; // Returning null if user not found
  }

  return user._id;
};

exports.sendFeedback = async (req, res) => {
  try {
    const email = req.user.email;
    
    // Get the user ID using the utility function
    const userId = await getUserId(email);

    if (!userId) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Extract feedback data from request body
    const { rating, review } = req.body;

    // Create feedback object
    const feedback = new Feedback({
      userId: userId,
      rating: rating,
      review: review
    });

    // Save feedback to the database
    await feedback.save();

    res.status(201).json({ success: true, message: "Feedback uploaded successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

exports.getFeedback = async (req, res) => {
  try {
    // Retrieve all feedback from the database
    const allFeedback = await Feedback.find();

    res.status(200).json({ success: true, feedback: allFeedback });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
