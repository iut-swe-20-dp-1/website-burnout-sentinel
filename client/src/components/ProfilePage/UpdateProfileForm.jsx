import React, { useEffect, useState } from "react";
import {
  inputFieldClass,
  labelClass,
  secondaryButtonClass,
} from "../../utils/styles";
import { Link } from "react-router-dom";
import Button from "../Button";
import FormMessage from "../FormMessage";
import upload from "../../utils/upload";
import axios from "axios";
import { serverUrl } from "../../utils/urls";
import { getAuthConfigHeader } from "../../utils/config";

const UpdateProfileForm = ({ reloadSidebar }) => {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [wait, setWait] = useState("");
  const [userimg, setUserimg] = useState(null);
  const [displayUserImg, setDisplayUserImg] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    // dob: "",
    name: "",
    gender: "",
    pic: null,
  });

  //   var userData = {
  //     email: "ayesha@gmail.com",
  //     username: "john_doe",
  //     dob: "1990-01-01",
  //     name: "John Doe",
  //     gender: "male",
  //     profileImage: null,
  //   };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // const config = {
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   withCredentials: true,
        // };

        const authConfig = getAuthConfigHeader()
        console.log("authconfig at update profile : ", authConfig)

        const response = await axios.get(
          `${serverUrl}/api/profile/get`,
          authConfig
        );
        const userData = response.data.user;
        setFormData({
          email: userData.email,
          username: userData.username,
          // dob: userData.dob,
          name: userData.fullName,
          gender: userData.gender,
        });
        setUserimg(userData.profileImage);
        setDisplayUserImg(userData.profileImage);
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    };

    fetchUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setSuccess("");
    setWait("Please wait...");

    let url;
    if (userimg != null) {
      console.log("userImg not null no more sire");
      url = await upload(userimg);
    }

    try {
      const authConfig = getAuthConfigHeader()
      const response = await axios.post(
        `${serverUrl}/api/profile/update`,
        {
          ...formData,
          profileImage: url,
        },
        authConfig
      );

      if (response.status === 200) {
        setWait("");
        setSuccess("Profile Updated sucessfully.");
        setUserimg(url);
        setDisplayUserImg(url);
        // Trigger the reload of the UserSidebar component
        reloadSidebar();
      }
    } catch (err) {
      console.log(err);
      setWait("");
      setMessage("Internal server error");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    // const { name } = e.target;
    // const file = e.target.files[0];
    // setFormData({ ...formData, [name]: file });
    setUserimg(e.target.files[0]);
    console.log("Got image : ", e.target.files[0]);

    // Create a local URL for the image
    const imageUrl = URL.createObjectURL(e.target.files[0]);
    setDisplayUserImg(imageUrl);
    console.log(imageUrl)
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
              Your Profile
            </h2>
          </div> */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-6">
              {/* <div className={`h-64 w-64 user cursor-pointer relative rounded-full my-1 ml-1 bg-cover bg-center bg-[url(`${formData.pic}`)]`}>
                            </div> */}
              <label className={`${labelClass}`} htmlFor="pic">
                Profile Image
              </label>
              {displayUserImg ? (
                <div className="flex items-center justify-center h-40 my-4">
                  <img
                    className="h-40 w-40 object-cover rounded-full"
                    src={displayUserImg}
                    alt="current_pfp"
                  />
                </div>
              ) : (
                <div className="text-xl my-2 text-center">
                  You don't seem to have a profile image yet!
                </div>
              )}

              <input
                className={`${inputFieldClass}`}
                type="file"
                accept=".png, .jpeg, .jpg, .gif"
                name="pic"
                onChange={(e) => handleFileChange(e)}
              />
            </div>

            {/* <div className="w-full md:w-full px-3 mb-6">
              <label className={`${labelClass}`} htmlFor="name">
                Full Name
              </label>
              <input
                className={`${inputFieldClass}`}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div> */}

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
              />
            </div>

            <div className="w-full md:w-full px-3 mb-6">
              <label className={`${labelClass}`} htmlFor="email">
                Email
              </label>
              <input
                className={`${inputFieldClass} cursor-not-allowed`}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                readOnly
              />
            </div>

            {/* <div className="w-full md:w-full px-3 mb-6">
              <label className={`${labelClass}`} htmlFor="dob">
                Date of Birth
              </label>
              <input
                className={`${inputFieldClass}`}
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
              />
            </div> */}

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
              >
                <option value="" disabled selected>
                  Select your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {success && (
              <FormMessage bg_class={"bg-green-300"} message={success} />
            )}
            {error && !wait && (
              <FormMessage bg_class={"bg-red-300"} message={error} />
            )}
            {wait && <FormMessage bg_class={"bg-yellow-300"} message={wait} />}
            {message && !success && (
              <FormMessage bg_class={"bg-yellow-300"} message={message} />
            )}

            <div className="w-full md:w-full px-3">
              <Button
                additional_classes={
                  "my-2 lg:px-10 md:px-6 px-6 py-3 text-white bg-[#7366FF] text-2xl font-bold"
                }
                button_text={"Save Changes"}
                button_type={"submit"}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateProfileForm;
