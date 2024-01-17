import React, { useState } from 'react';
import LottieAnimation from '../LottieAnimation';
import { FiChevronsDown, FiChevronsUp } from "react-icons/fi";
import ManThinkingAnimation from "../../assets/ManThinkingAnimation.json";
import { dashboardCardBgUrl, dashboardCardBgClass, dashboardCardClass } from '../../utils/styles';
import Button from '../Button';
import BottomNotification from '../BottomNotification';
import { Link } from 'react-router-dom';
import SampleCsvView from './SampleCsvView';
import { sampleCsvUrl } from '../../utils/urls';

const UserHomepageCards = ({ setShowAddBaseDataForm, setShowUpdateBaseDataForm, setShowTestForm, baseDataExists, setBaseDataExists }) => {
    const [showNotification, setShowNotification] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const handleNotification = () => {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 4000);
    };

    return (
        <>
            {showNotification && <BottomNotification text="Please Enter Your Base Data First!" />}
            {/* <div className="p-2 rounded-lg">
                    <h2 className="text-4xl font-bold text-[#7366FF] tracking-tight text-center">
                      Get Started Right Away!
                    </h2>
                  </div> */}



            {/* <div className="mb-4 p-2 rounded-lg">
                <h2 className="text-3xl font-bold text-[#7366FF] tracking-tight">
                    Confused About Getting Started? Download/View our sample CSV below
                </h2>
            </div> */}

            <div className={`${dashboardCardClass}`} style={{ backgroundImage: `url(${dashboardCardBgUrl})` }}>
                <div className={`bg-[#7366FF] ${dashboardCardBgClass}`}></div>
                <div className="relative w-full h-full p-2 sm:px-6 lg:px-4 flex">
                    <div>
                        <h1 className="text-white text-3xl mt-2 font-bold flex items-center justify-between">
                            <span className="flex-grow">Download sample CSV file for entering your data</span>
                            <div className="ml-5 rounded-full bg-white/80 px-4 py-2 text-[#300722] font-bold cursor-pointer" onClick={() => setExpanded(!expanded)}>
                                {expanded ? (
                                    <>
                                        <FiChevronsUp
                                            className="float-right cursor-pointer"
                                        />
                                    </>
                                ) : (
                                    <div className="flex items-center font-bold  ">
                                        <span className="text-xl">View CSV Format</span>
                                        <FiChevronsDown className="ml-auto cursor-pointer" />
                                    </div>

                                )}
                            </div>

                        </h1>

                        {expanded && <SampleCsvView />}
                        <Link to={`${sampleCsvUrl}`}>
                            <Button
                                additional_classes="my-4 lg:px-5 md:px-2 px-2 py-1 text-white bg-[#300722] text-2xl font-bold before:border-[#300722]"
                                button_text={"Download Sample CSV"}
                                flex_start="true"
                            />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:-mt-5 lg:mb-0 mb-6">
                <div className="col-span-2 lg:col-span-2 ">
                    <LottieAnimation lottie_animation_data={ManThinkingAnimation} style_classes="w-4/6" />
                </div>
                <div className="col-span-2 lg:col-span-1 my-auto w-full">
                    <div className="grid gap-4 mt-3">
                        <div className={`${dashboardCardClass}`} style={{ backgroundImage: `url(${dashboardCardBgUrl})` }}>
                            <div className={`bg-[#1bf7f3] ${dashboardCardBgClass}`}></div>
                            {/* <div className={`bg-yellow-600 ${dashboardCardBgClass}`}></div> */}
                            <div className="relative w-full h-full p-4 sm:px-12 lg:px-6 flex">
                                <div>

                                    <h1 className="text-[#300722] text-4xl mt-2 font-bold">
                                        Stress Assessment
                                    </h1>

                                    <p className="text-[#300722] text-xl mt-2">
                                        Assess your stress levels for informed well-being decisions. Start now for a healthier future.
                                    </p>
                                    <Button
                                        additional_classes={`my-4 lg:px-5 md:px-2 px-2 py-1 text-white ${baseDataExists ? "bg-[#300722] before:border-[#300722]" : "bg-gray-500 before:border-gray-500"} text-2xl font-bold`}
                                        button_text="Take Test"
                                        flex_start="true"
                                        button_function={() => {
                                            if (baseDataExists) {
                                                setShowTestForm(true);
                                            } else {
                                                handleNotification();
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default UserHomepageCards;
