import React from 'react'
import LottieAnimation from './LottieAnimation'
import HeadacheAnimation from "../assets/HeadacheAnimation.json"
import TiredAnimation from "../assets/TiredAnimation.json"
import SocialWithdrawalAnimation from "../assets/SocialWithdrawalAnimation.json"
import InsomniaAnimation from "../assets/InsomniaAnimation.json"

const SectionSymptom = () => {
    return (
        <>
            <section id="symptoms">x
                <div className="container mx-auto p-4 lg:p-12">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        <div className="overflow-hidden rounded-2xl bg-blue-50 p-4 lg:p-12">
                            <div className="flex items-center text-blue-500">
                                <p className="text-sm font-bold uppercase">Headaches</p>

                                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                            <h2 className="mt-4 text-3xl font-semibold text-slate-800">Frequent Headaches</h2>

                            <p className="mt-4 text-lg text-slate-600">Frequent headaches may be a sign of stress affecting your well-being.</p>

                            <div className="mt-12 flex transform items-center justify-center transition-transform duration-150 ease-in-out hover:scale-110">
                                <LottieAnimation lottie_animation_data={HeadacheAnimation} style_classes={"w-3/4"} />
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-2xl bg-pink-50 p-4 lg:p-12">
                            <div className="flex items-center text-pink-500">
                                <p className="text-sm font-bold uppercase">Difficulty Concentrating</p>

                                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>

                            <h2 className="mt-4 text-3xl font-semibold text-slate-800">Concentration Challenges</h2>

                            <p className="mt-4 text-lg text-slate-600">Stress can lead to difficulty concentrating and may impact your daily tasks.</p>

                            <div className="mt-12 flex transform items-center justify-center transition-transform duration-150 ease-in-out hover:scale-110">
                                <LottieAnimation lottie_animation_data={TiredAnimation} style_classes={"h-full mx-auto"} />
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-2xl bg-green-50 p-4 lg:p-12">
                            <div className="flex items-center text-green-500">
                                <p className="text-sm font-bold uppercase">Fatigue</p>

                                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>

                            <h2 className="mt-4 text-3xl font-semibold text-slate-800">Chronic Fatigue</h2>

                            <p className="mt-4 text-lg text-slate-600">Chronic fatigue and low energy levels are often linked to high levels of stress.</p>

                            <div className="mt-12 flex transform items-center justify-center transition-transform duration-150 ease-in-out hover:scale-110">
                                <LottieAnimation lottie_animation_data={SocialWithdrawalAnimation} />
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-2xl bg-purple-50 p-4 lg:p-12">
                            <div className="flex items-center text-purple-500">
                                <p className="text-sm font-bold uppercase">Change in Sleep Patterns</p>

                                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>

                            <h2 className="mt-4 text-3xl font-semibold text-slate-800">Sleep Pattern Changes</h2>

                            <p className="mt-4 text-lg text-slate-600">Stress can disrupt both falling asleep and staying asleep, causing insomnia or restless sleep.</p>

                            <div className="mt-12 flex transform items-center justify-center transition-transform duration-150 ease-in-out hover:scale-110">
                                <LottieAnimation lottie_animation_data={InsomniaAnimation} style_classes={"h-full mx-auto"} />
                            </div>
                        </div>
                    </div>
                </div></section>
        </>
    )
}

export default SectionSymptom;
