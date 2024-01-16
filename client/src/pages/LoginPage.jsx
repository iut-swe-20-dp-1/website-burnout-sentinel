import React, { useState } from "react";
import LottieAnimation from "../components/LottieAnimation";
import LoginAnimation from "../assets/LoginAnimation.json";
import {
  inputFieldClass,
  labelClass,
  secondaryButtonClass,
} from "../utils/styles";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import FormMessage from "../components/FormMessage";
import axios from "axios";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [wait, setWait] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitDjango = (e) => {
    e.preventDefault();

    const loginUrl = "http://127.0.0.1:8000/api/signin/";

    // Create a JSON object with the email and password data
    const loginData = {
      email: formData.email,
      password: formData.password,
    };

    // Send a POST request to your Django backend
    fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken,
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => {
        if (response.status === 200) {
          console.log(JSON.stringify(response));
          setWait("");
          setError("");
          console.log("yes baby");
          setSuccess("Successfully logged in!");
          navigate("/home");
        }
        return response.text();
      }) // Parse the response as text
      .then((data) => {
        setWait("");
        setSuccess("");
        setError("An error has occurred!");
        console.log("Response from the server:", data);
      })
      .catch((error) => {
        setWait("");
        setSuccess("");
        setError("An error has occurred!");
        console.error("Error while sending data to the server:", error);
      });
  };

  const handleSubmit = async (e) => {
    // to Mern backend
    e.preventDefault();

    try {
      const loginData = {
        email: formData.email,
        password: formData.password,
      };
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };
      
      const response = await axios.post(
        "http://localhost:8800/api/auth/login",
        loginData,
        config
      );
      console.log("Got a response");

      console.log(response.data);
      if (response.status == 200) {
        console.log("Login Sucessful.");
        console.log(response.data);

        //Testing to see if protected route can now be accessed
        const res2 = await axios.get("http://localhost:8800/api/auth/protected",{ withCredentials: true })
        console.log(res2.data); 


        navigate("/home");
      } else {
        console.log("Unsucessful Login");
      }
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
  const csrftoken = getCookie("csrftoken");

    return (
        <>
            <div className='bg-[#FFA5A5] min-h-screen flex flex-col w-full h-full bg-cover bg-fixed bg-center'
                style={{
                    backgroundImage: "url(https://img.freepik.com/free-vector/flat-north-pole-winter-background_23-2149851540.jpg?w=740&t=st=1700407711~exp=1700408311~hmac=291927d45eda57e00f0e52cab905523b63bebeb4628d85ecc690b1946332ee91)",
                }}
            >

                <div className="flex justify-center my-2 mx-4 md:mx-0">
                    <form className="w-full max-w-xl md:max-w-2xl bg-white/90 my-8 rounded-lg shadow-md px-12 py-6" onSubmit={handleSubmit}>
                        <div className="text-center mb-8">
                            <h2 className="text-5xl font-bold text-[#7366FF] tracking-tight">
                                Login to your Account
                            </h2>
                        </div>
                        <LottieAnimation lottie_animation_data={LoginAnimation} start_frame={53} style_classes={"w-3/6 mx-auto"} />
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-full px-3 mb-6">
                                <label className={`${labelClass}`} htmlFor='email'>Email</label>
                                <input className={`${inputFieldClass}`} type='email' name="email" value={formData.email} onChange={handleInputChange} required />
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
                  required
                />
              </div>

              <div className="w-full flex items-center justify-between px-3 mb-3 ">
                <label for="show_password" className="flex items-center w-1/2">
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

                            <div className="text-lg text-center px-3 mb-3 ">
                                <Link to="/forgot-password" className="text-blue-500 hover:underline">Forgot Your Password?</Link>
                            </div>

                            {success && <FormMessage bg_class={"green-300"} message={success} />}
                            {error && !wait && <FormMessage bg_class={"red-300"} message={error} />}
                            {wait && <FormMessage bg_class={"yellow-300"} message={wait} />}

              <div className="w-full md:w-full px-3">
                <Button
                  additional_classes={
                    "my-2 lg:px-10 md:px-6 px-6 py-3 text-white bg-[#7366FF] text-2xl font-bold"
                  }
                  button_text={"Login"}
                  button_type={"submit"}
                />
              </div>
              <div className="mx-auto pb-1 text-center">
                <span className="text-sm text-[#300722]">or login with</span>
              </div>
              <div className="flex items-center w-full mt-2 mx-auto justify-center">
                <div className="px-3 pt-4 border-t border-gray-400">
                  <button type="button" className={`${secondaryButtonClass}`}>
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
            </div>
            <div className="text-lg text-center">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Register Here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
