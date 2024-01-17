import React, { useState } from "react";
import Button from "../components/Button";
import {
  incognitoButtonClass,
  inputFieldClass,
  labelClass,
  secondaryButtonClass,
} from "../utils/styles";
import { Link, useNavigate } from "react-router-dom";
import LottieAnimation from "../components/LottieAnimation";
import RegisterAnimation from "../assets/RegisterAnimation.json";
import FormMessage from "../components/FormMessage";
import { GiHidden } from "react-icons/gi";
import { BsIncognito } from "react-icons/bs";
import axios from "axios";
import { clientUrl, serverUrl } from "../utils/urls";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [message, setMessage] = useState("");
  const [wait, setWait] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const turnOnGuestMode = () => {
    navigate('/guest-mode')
  }

  const handleSubmitDjango = (e) => {
    e.preventDefault();
    setMessage("");
    setWait("Please wait...");

    if (formData.password !== formData.confirm_password) {
      setWait("");
      setMessage("Your passwords do not match!");
      return;
    }

    const loginUrl = "http://127.0.0.1:8000/api/signup/";

    // Create a JSON object with the email and password data
    const loginData = {
      email: formData.email,
      password: formData.password,
      name: formData.name,
      username: formData.username,
      dob: formData.username,
      gender: formData.gender,
    };

    // Send a POST request to your Django backend
    fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => {
        if (response.status === 201) {
          console.log("yes baby");
          setWait("");
          setSuccess("Registration was successful!");
          navigate("/login");
        }
        return response.text();
      }) // Parse the response as text
      .then((data) => {
        // Handle the response from the Django backend
        setWait("");
        console.log("Response from the server:", data);
        // You can perform actions based on the response here
      })
      .catch((error) => {
        setWait("");
        setError("Error occured during registration!");
        console.error("Error while sending data to the server:", error);
        // Handle errors as needed
      });
  };

  const handleGoogleSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Access-Control-Allow-Origin": `${clientUrl}`,
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          "Access-Control-Allow-Headers":
            "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Allow-Methods, Access-Control-Request-Headers, Access-Control-Allow-Origin",
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };

      // Perform the API request
      const response = await axios.get(
        `${serverUrl}/api/auth/google?register=true`,
        config
      );

      console.log(response.data);

      // Check if the response status is 201
      if (response.status === 201) {
        console.log("Registration Successful");
        // Open a new popup window
        const popupWindow = window.open(response.data.authURL, "_blank");

        // You may want to add an event listener to handle popup closure or other interactions
        if (popupWindow) {
          popupWindow.addEventListener("beforeunload", () => {
            // Handle actions when the popup is closed
            console.log("Popup closed");
            // Additional logic if needed
          });
        }

        // Optionally, you can navigate after opening the popup
        // navigate("/login");
      } else {
        console.log("Unsuccessful registration");
      }
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };
  const handleSubmit = async (e) => {
    // to Mern backend
    e.preventDefault();

    try {
      const registrationData = {
        email: formData.email,
        password: formData.password,
        fullName: formData.name,
        username: formData.username,
        dob: formData.username,
        gender: formData.gender,
      };
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        `${serverUrl}/api/auth/register`,
        registrationData
      );

      console.log(response.data);
      if (response.status == 201) {
        console.log("Registration Sucessfull");
        // Give sucess notification?
        navigate("/login");
      } else {
        console.log("Unsucessful registration");
      }
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    dob: "",
    gender: "",
    password: "",
    confirm_password: "",
  });

  return (
    <div
      className="bg-[#FFA5A5] min-h-screen flex flex-col w-full h-full bg-cover bg-fixed bg-center"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/flat-north-pole-winter-background_23-2149851535.jpg?w=740&t=st=1700411376~exp=1700411976~hmac=823fb0cf464cf6cfa98581a29389fae63eb6c6416911b9aef00f095439f0658f)",
      }}
    >
      <div className="flex justify-center my-2 mx-4 md:mx-0">
        <form
          className="w-full max-w-xl md:max-w-2xl bg-white/80 rounded-lg shadow-md px-12 py-6 my-8 "
          onSubmit={handleSubmit}
        >
          <div className="text-center mb-8">
            <h2 className="text-5xl font-bold text-[#7366FF] tracking-tight">
              Create An Account
            </h2>
          </div>
          <LottieAnimation
            lottie_animation_data={RegisterAnimation}
            style_classes={"w-2/6 mx-auto"}
          />
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-6">
              <label className={`${labelClass}`} htmlFor="name">
                Full Name
              </label>
              <input
                className={`${inputFieldClass}`}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label className={`${labelClass}`} htmlFor="username">
                Username
              </label>
              <input
                className={`${inputFieldClass}`}
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label className={`${labelClass}`} htmlFor="email">
                Email
              </label>
              <input
                className={`${inputFieldClass}`}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label className={`${labelClass}`} htmlFor="dob">
                Date of Birth
              </label>
              <input
                className={`${inputFieldClass}`}
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label className={`${labelClass}`} htmlFor="gender">
                Gender
              </label>
              <select
                className={`${inputFieldClass}`}
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled selected>
                  Select your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="w-full md:w-full px-3 mb-6">
              <label className={`${labelClass}`} htmlFor="password">
                Password
              </label>
              <input
                className={`${inputFieldClass}`}
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                minLength={8}
                required
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label className={`${labelClass}`} htmlFor="confirm_password">
                Confirm Password
              </label>
              <input
                className={`${inputFieldClass}`}
                type={showPassword ? "text" : "password"}
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleInputChange}
                minLength={8}
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
            {error && !wait && (
              <FormMessage bg_class={"bg-red-400"} message={error} />
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
                button_text={"Register"}
                button_type={"submit"}
              />
            </div>
            {/* <div className="mx-auto pb-1 text-center">
              <span className="text-sm text-[#300722]">or sign up with</span>
            </div>
            <div className="flex items-center w-full mt-2 mx-auto justify-center">
              <div className="px-3 pt-4 border-t border-gray-400">
                <button
                  type="button"
                  className={`${secondaryButtonClass}`}
                  onClick={handleGoogleSubmit}
                >
                  <svg
                    className="mr-2 -ml-1 w-4 h-4"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="google"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                  >
                    <path
                      fill="currentColor"
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    ></path>
                  </svg>
                  Google
                </button>
              </div>
            </div>
          </div> */}

            <div className="mx-auto pb-1 text-center">
              <span className="text-sm text-[#300722] uppercase">or try</span>
            </div>
            <div className="flex items-center w-full mt-2 mx-auto justify-center">
              <div className="px-3 pt-4 border-t border-gray-400">
                <button
                  type="button"
                  className={`${incognitoButtonClass}`}
                  onClick={turnOnGuestMode}
                >
                  <BsIncognito className="text-[#300722] text-xl mr-2" />
                  Guest Mode
                </button>
              </div>
            </div>
          </div>
          <div className="text-lg text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login Here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
