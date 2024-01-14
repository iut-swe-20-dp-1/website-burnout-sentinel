const User = require("../models/User");

const removePassword = (user) => {
  const { password, ...userWithoutPass } = user;
  return userWithoutPass;
};


exports.updateProfile = async (req, res) => {
  const { email, username, dob, name, gender, profileImage } = req.body;
  const currentEmail = req.user.email;
  try {
    const user = await User.findOne({ email: currentEmail });
    if (email) user.email = email;
    if (username) user.username = username;
    if (dob) user.dob = dob;
    if (name) user.fullName = name;
    if (gender) user.gender = gender;
    if (profileImage) user.profileImage = profileImage;

    // Save the updated user
    await user.save();
    const userWithoutPass = removePassword(user.toObject());

    // Optionally, send a response indicating success
    return res
      .status(200)
      .json({ sucess : true,  message: "User information updated successfully.", user: userWithoutPass });
  } catch (err) {
    console.log(err);
  }
};

exports.getInfo = async (req, res) => {
  const currentEmail = req.user.email;
  try {
    const user = await User.findOne({ email: currentEmail });
    const userWithoutPass = removePassword(user.toObject());
    return res
      .status(200)
      .json({ sucess : true,  user : userWithoutPass });
  } catch (err) {
    console.log(err);
  }
};
