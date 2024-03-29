import React, { useState, useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import { userSidebarIconClass } from "../utils/styles";
import { BsPersonCircle } from "react-icons/bs";
import { HiInformationCircle } from "react-icons/hi";
import { FaHandsHelping } from "react-icons/fa";
import { IoExit } from "react-icons/io5";
import { BiSolidTimeFive } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import axios from "axios";
import { serverUrl } from "../utils/urls";
import { getAuthConfigHeader } from "../utils/config";

const UserSidebar = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const config = {
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   withCredentials: true,
        // };
        const authConfig = getAuthConfigHeader();

        const response = await axios.get(
          `${serverUrl}/api/profile/get`,
          // config
          authConfig
        );
        setUserData(response.data.user);
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that the effect runs once when the component mounts

  const links = [
    {
      text: "Dashboard",
      icon: <AiFillHome className={`${userSidebarIconClass}`} />,
      link: "/home",
    },
    {
      text: "History",
      icon: <BiSolidTimeFive className={`${userSidebarIconClass}`} />,
      link: "/history",
    },
    {
      text: "Profile",
      icon: <BsPersonCircle className={`${userSidebarIconClass}`} />,
      link: "/profile",
    },
    {
      text: "Suggestions",
      icon: <FaHandsHelping className={`${userSidebarIconClass}`} />,
      link: "/suggestions",
    },
    {
      text: "Learn More",
      icon: <HiInformationCircle className={`${userSidebarIconClass}`} />,
      link: "/learn-more",
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogOut = async () => {
    const authConfig = getAuthConfigHeader();
    const res = await axios.get(
      `${serverUrl}/api/auth/logout`,
      { withCredentials: true }
      // authConfig
    );
    console.log(res.data);
    console.log("T T fixing logout...")
    document.cookie =
      "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    if (res.status === 200) {
      console.log("Logout was status 200");
      navigate("/");
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const username = userData?.username || "DefaultUsername";
  const profileImage =
    userData?.profileImage ||
    "https://i.pinimg.com/1200x/78/6f/75/786f7595ba1b9d812a24b0960e18563c.jpg";

  return (
    <>
      <nav className="bg-[#7366FF] border-b border-[#aea8f3] fixed z-30 w-full">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start lg:p-2 p-0">
              <button
                id="toggleSidebarMobile"
                aria-expanded="true"
                aria-controls="sidebar"
                className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
                onClick={toggleSidebar}
              >
                <svg
                  id="toggleSidebarMobileHamburger"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  id="toggleSidebarMobileClose"
                  className="w-6 h-6 hidden"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <a
                href="/home"
                className="text-xl font-bold flex items-center lg:ml-2.5"
              >
                <img src={logo} className="h-6 mr-2" alt="Logo" />
                <span className="self-center text-white whitespace-nowrap">
                  Burnout Sentinel
                </span>
              </a>
            </div>

            <div className="flex items-center justify-end p-0">
              <div className="inline relative">
                <button
                  type="button"
                  className="inline-flex items-center relative px-2 border border-white rounded-full"
                  onClick={toggleDropdown}
                >
                  <div className="px-1.5 font-semibold text-white">
                    {username}
                  </div>
                  <div
                    className="h-10 w-10 user cursor-pointer relative rounded-full my-1 ml-1"
                    style={{
                      backgroundImage: `url('${profileImage}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </button>
                {showDropdown && (
                  <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-md overflow-hidden">
                    <div
                      onClick={() => {
                        navigate("/profile");
                      }}
                      className="flex px-6 items-center cursor-pointer py-3 rounded-sm hover:bg-[#DFE9F7] text-[#300722] group"
                    >
                      <BsPersonCircle className={`${userSidebarIconClass}`} />
                      <span className="ml-3 text-xl text-[#300722]">
                        Profile
                      </span>
                    </div>
                    <hr />
                    <div
                      onClick={handleLogOut}
                      className="flex px-6 items-center cursor-pointer py-3 rounded-sm hover:bg-[#DFE9F7] text-[#300722] group"
                    >
                      <IoExit className={`${userSidebarIconClass}`} />
                      <span className="ml-3 text-xl text-[#300722]">
                        Logout
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex overflow-hidden bg-white/40 pt-16">
        <aside
          id="sidebar"
          className={`fixed z-20 h-full bg-white/60  top-0 left-0 pt-16 lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75 ${
            isSidebarOpen ? "flex" : "hidden -w-64"
          }`}
          aria-label="Sidebar"
        >
          <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200  pt-5">
            <div className="flex-1 flex flex-col pb-4 overflow-y-auto">
              <div className="flex-1 px-3 divide-y space-y-1">
                <ul className="space-y-2 pb-2">
                  {links.map((link, index) => (
                    <li
                      key={index}
                      className={`${
                        currentPath === link.link
                          ? "bg-[#aafffe] rounded-lg"
                          : ""
                      }`}
                    >
                      <a
                        href={link.link}
                        className={`flex items-center py-3 px-2 rounded-lg hover:bg-[#96fffe] text-[#300722] group`}
                      >
                        {link.icon}
                        <span className="ml-3 text-xl text-[#300722]">
                          {link.text}
                        </span>
                      </a>
                    </li>
                  ))}
                  <hr className="bg-[#300722] text-[#300722]" />

                  <li>
                    <div
                      onClick={handleLogOut}
                      className="flex items-center cursor-pointer py-3 px-2 rounded-lg hover:bg-[#96fffe] text-[#300722] group"
                    >
                      <IoExit className={`${userSidebarIconClass}`} />
                      <span className="ml-3 text-xl text-[#300722]">
                        Logout
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default UserSidebar;
