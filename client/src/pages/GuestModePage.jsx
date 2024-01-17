import React, { useState } from 'react';
import UserHomepageCards from '../components/UserHomepage/UserHomepageCards';
import TakeTestAnimation from '../assets/TakeTestAnimation.json';
import TestForm from '../components/UserHomepage/TestForm';
import logo from "../assets/logo.png"
import incognito from "../assets/incognito.png"
import { useNavigate } from 'react-router-dom';

const GuestModePage = () => {
    const [baseDataExists, setBaseDataExists] = useState(true);
    const [showAddBaseDataForm, setShowAddBaseDataForm] = useState(false);
    const [showUpdateBaseDataForm, setShowUpdateBaseDataForm] = useState(false);
    const [showTestForm, setShowTestForm] = useState(false);
    const navigate = useNavigate()

    const exitGuestMode = () => {
        navigate('/')
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
                                        <img src={incognito}
                                            className="h-10 w-10 user cursor-pointer relative rounded-full my-1 ml-1"
                                            // style={{
                                            //     backgroundImage: `url('https://liquipedia.net/commons/images/thumb/f/f0/Incognito_Logo_V3_Black_Border.png/600px-Incognito_Logo_V3_Black_Border.png')`,
                                            //     backgroundSize: "cover",
                                            //     backgroundPosition: "center",
                                            //   }}
                                              onClick={exitGuestMode}
                                        />
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
