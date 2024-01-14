import React from 'react'
import LottieAnimation from '../LottieAnimation'
import HeadacheAnimation from "../../assets/HeadacheAnimation.json"
import TiredAnimation from "../../assets/TiredAnimation.json"
import SocialWithdrawalAnimation from "../../assets/SocialWithdrawalAnimation.json"
import InsomniaAnimation from "../../assets/InsomniaAnimation.json"

const SectionSymptom = () => {
    return (
        <>
            <section id="symptoms">
                <h1 className='text-5xl mb-6 text-center text-[#7366FF] font-bold'>Symptoms</h1>
                <h1 className='text-lg text-center text-[#300722] mx-12 '>Chronic stress often brings a range of challenging symptoms, such as persistent anxiety, disrupted sleep patterns, and a feeling of being constantly overwhelmed. It's important to recognize these signs as signals that you might need support. Seeking help and self-care are valuable steps in managing chronic stress with compassion and understanding.</h1>
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

                        <div className="overflow-hidden rounded-2xl bg-pink-50 p-4 lg:p-12">
                            <div className="flex items-center text-pink-500">
                                <p className="text-sm font-bold uppercase">Difficulty Concentrating</p>

                                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>

                            <h2 className="mt-4 text-3xl font-semibold text-slate-800">Concentration Challenges</h2>

                            <p className="mt-4 text-lg text-slate-600">Stress can lead to difficulty concentrating and may impact your daily tasks.</p>

                            <div className="mt-20 flex transform items-center justify-center transition-transform duration-150 ease-in-out scale-125 hover:scale-150">
                                <LottieAnimation lottie_animation_data={TiredAnimation} style_classes={"h-full mx-auto pt-12"} />
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

                            <div className="mt-12 flex transform items-center justify-center transition-transform duration-150 ease-in-out scale-110 hover:scale-125">
                                <LottieAnimation lottie_animation_data={SocialWithdrawalAnimation} style_classes="w-5/6" />
                            </div>
                        </div>
                    </div>
                </div></section>
        </>
    )
}

export default SectionSymptom;
