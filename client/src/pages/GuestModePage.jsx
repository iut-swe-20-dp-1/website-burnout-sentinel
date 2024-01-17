import React, { useState } from 'react';
import UserHomepageCards from '../components/UserHomepage/UserHomepageCards';
import TakeTestAnimation from '../assets/TakeTestAnimation.json';
import TestForm from '../components/UserHomepage/TestForm';
import logo from "../assets/logo.png"

const GuestModePage = () => {
    const [baseDataExists, setBaseDataExists] = useState(true);
    const [showAddBaseDataForm, setShowAddBaseDataForm] = useState(false);
    const [showUpdateBaseDataForm, setShowUpdateBaseDataForm] = useState(false);
    const [showTestForm, setShowTestForm] = useState(false);

    const exitGuestMode = () => {
        //do magik juice here?
    }

    return (
        <>
            <div className='bg-[#FFDFDF] min-h-screen'>
                <nav className="bg-[#7366FF] border-b border-[#aea8f3] fixed z-30 w-full">
                    <div className="px-3 py-3 lg:px-5 lg:pl-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center justify-start lg:p-2 p-0">
                                <a
                                    href="/guest-mode"
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
                                    >
                                        <div className="px-1.5 font-semibold text-white">
                                            Exit Guest Mode
                                        </div>
                                        <div
                                            className="h-10 w-10 user cursor-pointer relative rounded-full my-1 ml-1"
                                            style={{
                                                backgroundImage: `url('https://i.pinimg.com/1200x/78/6f/75/786f7595ba1b9d812a24b0960e18563c.jpg')`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                              }}
                                              onClick={exitGuestMode}
                                        ></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className='pt-16 px-4'>
                    <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
                    <div id="main-content" className="relative overflow-y-auto lg:mx-16">
                        <main>
                            <div className="pt-6 px-4">
                                <UserHomepageCards baseDataExists={baseDataExists} setBaseDataExists={setBaseDataExists} setShowAddBaseDataForm={setShowAddBaseDataForm} setShowUpdateBaseDataForm={setShowUpdateBaseDataForm} setShowTestForm={setShowTestForm} />

                                {showTestForm && <TestForm setShowTestForm={setShowTestForm} guest={true} form_title={`Start Your Stress Assessment`} lottie_animation_data={TakeTestAnimation} />}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GuestModePage;
