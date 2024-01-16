import React, { useState } from "react";
import LottieAnimation from "../components/LottieAnimation";
import ResetPasswordAnimation from "../assets/ResetPasswordAnimation.json";
import {
  inputFieldClass,
  labelClass,
  secondaryButtonClass,
} from "../utils/styles";
import Button from "../components/Button";
import FormMessage from "../components/FormMessage";
import { serverUrl } from "../utils/urls";

const ResetPasswordPage = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [wait, setWait] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [formData, setFormData] = useState({
    email: "",
    currPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (formData.newPassword !== formData.confirmNewPassword) {
      setMessage("Your passwords do not match!");
      return;
    }

    try {
      const response = await fetch(
        `${serverUrl}/api/auth/resetpassword`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // Include cookies in the request
          body: JSON.stringify({
            currentPassword: formData.currPassword,
            newPassword: formData.newPassword,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // Password reset successful, handle success accordingly
        setMessage("Password reset successful!");
      } else {
        // Password reset failed, handle the error
        setMessage(data.message || "Password reset failed");
      }
    } catch (error) {
      console.error("Error during password reset:", error);
      setMessage("Internal server error");
    }
  };

  return (
    <>
      <div
        className=" min-h-screen flex flex-col w-full h-full bg-cover bg-fixed bg-center"
        // style={{
        //     backgroundImage: "url(https://images.unsplash.com/photo-1517315003714-a071486bd9ea?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        // }}
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1487147264018-f937fba0c817?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="flex justify-center my-2 mx-4 md:mx-0">
          <form
            className="w-full max-w-4xl bg-white/80 rounded-lg shadow-md px-12 py-6 my-8 backdrop-blur-sm"
            onSubmit={handleSubmit}
          >
            <div className="text-center mb-8">
              <h2 className="text-6xl font-bold text-[#7366FF] tracking-tight">
                Reset Your Password
              </h2>
            </div>
            <LottieAnimation
              lottie_animation_data={ResetPasswordAnimation}
              style_classes={"w-2/6 mx-auto"}
            />
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-full px-3 mb-6">
                <label className={`${labelClass}`} htmlFor="currPassword">
                  Current Password
                </label>
                <input
                  className={`${inputFieldClass}`}
                  type={showPassword ? "text" : "password"}
                  name="currPassword"
                  value={formData.currPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="w-full md:w-full px-3 mb-6">
                <label className={`${labelClass}`} htmlFor="newPassword">
                  New Password
                </label>
                <input
                  className={`${inputFieldClass}`}
                  type={showPassword ? "text" : "password"}
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="w-full md:w-full px-3 mb-6">
                <label className={`${labelClass}`} htmlFor="confirmNewPassword">
                  Confirm New Password
                </label>
                <input
                  className={`${inputFieldClass}`}
                  type={showPassword ? "text" : "password"}
                  name="confirmNewPassword"
                  value={formData.confirmNewPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="w-full flex items-center justify-between px-3 mb-3 ">
                <label htmlFor="show_password" className="flex items-center w-1/2">
                  <input
                    type="checkbox"
                    name="show_password"
                    id="show_password"
                    className="mr-1 bg-white shadow"
                    onChange={togglePasswordVisibility}
                  />
                  <span className="text-md text-gray-700 pt-1 h-full my-auto">
                    Show Password
                  </span>
                </label>
              </div>
              {success && (
                <FormMessage bg_class={"bg-green-300"} message={success} />
              )}
              {message && !success && (
                <FormMessage bg_class={"bg-yellow-300"} message={message} />
              )}
              {error && !wait && (
                <FormMessage bg_class={"bg-red-400"} message={error} />
              )}
              {wait && <FormMessage bg_class={"bg-yellow-300"} message={wait} />}

              <div className="w-full md:w-full px-3">
                <Button
                  additional_classes={
                    "my-2 lg:px-10 md:px-6 px-6 py-3 text-white bg-[#7366FF] text-2xl font-bold"
                  }
                  button_text={"Reset Password"}
                  button_type={"submit"}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordPage;
