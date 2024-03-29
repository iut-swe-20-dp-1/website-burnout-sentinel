import React, { useState } from "react";
import {
  inputFieldClass,
  labelClass,
  secondaryButtonClass,
} from "../../utils/styles";
import { Link } from "react-router-dom";
import Button from "../Button";
import FormMessage from "../FormMessage";
import { serverUrl } from "../../utils/urls";
import { getAuthConfigHeader } from "../../utils/config";

const ChangePasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [message, setMessage] = useState("");
  const [wait, setWait] = useState("");

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setWait("Please wait...");

    if (formData.newPassword !== formData.confirmNewPassword) {
      setWait("");
      setMessage("Your passwords do not match!");
      return;
    }


    
    try {
      const authConfig = getAuthConfigHeader()
      const response = await fetch(
        `${serverUrl}/api/auth/resetpassword`,
        {
          method: "POST",
          ...authConfig,  // Spread the properties from authConfig into the fetch options
          body: JSON.stringify({
            currentPassword: formData.currentPassword,
            newPassword: formData.newPassword,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // Password reset successful, handle success accordingly
        setWait("");
        setSuccess("Password reset successful!");
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
      <div className="flex justify-center">
        <form
          className="w-full bg-white/90 my-8 rounded-lg shadow-md px-6 pt-6"
          onSubmit={handleSubmit}
        >
          {/* <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#7366FF] tracking-tight">
              Change your password
            </h2>
          </div> */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-6">
              <label className={`${labelClass}`} htmlFor="currentPassword">
                Current Password
              </label>
              <input
                className={`${inputFieldClass}`}
                type={showPassword ? "text" : "password"}
                name="currentPassword"
                onChange={(e) => handleInputChange(e)}
                value={formData.currentPassword}
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
                onChange={(e) => handleInputChange(e)}
                value={formData.newPassword}
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
                onChange={(e) => handleInputChange(e)}
                value={formData.confirmNewPassword}
                required
              />
            </div>

            <div className="w-full flex items-center justify-between px-3 mb-3 ">
              <label
                htmlFor="show_password"
                className="flex items-center w-1/2"
              >
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
            {error && !wait && (
              <FormMessage bg_class={"bg-red-300"} message={error} />
            )}
            {message && !success && (
              <FormMessage bg_class={"bg-yellow-300"} message={message} />
            )}
            {wait && <FormMessage bg_class={"bg-yellow-300"} message={wait} />}

            <div className="w-full md:w-full px-3">
              <Button
                additional_classes={
                  "my-2 lg:px-10 md:px-6 px-6 py-3 text-white bg-[#7366FF] text-2xl font-bold"
                }
                button_text={"Change Password"}
                button_type={"submit"}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChangePasswordForm;
