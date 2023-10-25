import React from 'react';
import { AiOutlineHistory, AiOutlineNumber } from "react-icons/ai"
import { BiComment } from "react-icons/bi"

const SectionFeatures = () => {
    return (
        <section id="features" className="relative bg-blueGray-50">
            <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                <div className="absolute top-0 w-full h-full bg-center bg-cover rounded-lg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1530435460869-d13625c69bbf?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
                    <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black rounded-lg"></span>
                </div>
                <div className="container relative mx-auto">
                    <div className="items-center flex flex-wrap">
                        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                            <div className="pr-12">
                                <h1 className="text-white font-semibold text-5xl">
                                    How It Works
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-10 bg-blueGray-200 -mt-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                            <div className="hover:scale-105 relative flex flex-col min-w-0 break-words bg-[#FFDFDF]/90 w-full mb-8 shadow-lg rounded-lg">
                                <div className="px-4 py-5 flex-auto">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-[#f65c5c]">
                                        <AiOutlineNumber />
                                    </div>
                                    <h6 className="text-xl text-[#7366FF] font-bold">Stress Score</h6>
                                    <p className="mt-2 mb-4 text-[#300722]">
                                        Enter your data in CSV or in the form. The AI model will analyze your physiological data to give a stress score of 0-10.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-4/12 px-4 text-center">
                            <div className="hover:scale-105 relative flex flex-col min-w-0 break-words bg-[#FFDFDF]/90 w-full mb-8 shadow-lg rounded-lg">
                                <div className="px-4 py-5 flex-auto">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-[#7366FF]">
                                        <BiComment />
                                    </div>
                                    <h6 className="text-xl font-bold text-[#7366FF]">Suggestions</h6>
                                    <p className="mt-2 mb-4 text-[#300722]">
                                        Receive suggestions based on your stress level that can be followed so you can achieve a balance with your stress.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                            <div className="hover:scale-105 relative flex flex-col min-w-0 break-words bg-[#FFDFDF]/90 w-full mb-8 shadow-lg rounded-lg">
                                <div className="px-4 py-5 flex-auto">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-[#fdb540]">
                                    <AiOutlineHistory/>
                                    </div>
                                    <h6 className="text-xl font-bold text-[#7366FF]">View History</h6>
                                    <p className="mt-2 mb-4 text-[#300722]">
                                        View your stress history over time and keep track of your stress score in order to manage your stress.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionFeatures;
