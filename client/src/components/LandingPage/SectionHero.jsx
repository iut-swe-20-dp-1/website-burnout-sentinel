import React from 'react';
import Button from '../Button';
import HeroSectionAnimation from "../../assets/HeroSectionAnimation.json";
import LottieAnimation from '../LottieAnimation';
import { useNavigate } from 'react-router-dom';

const SectionHero = () => {
    const navigate = useNavigate();
    const redirect_to_register = () => {
        navigate('/register');
    }
    return (
        <section id="home" className="flex flex-col justify-center p-10 mt-20 my-6">
            <div className="relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-2xl mx-auto">
                <div className="absolute inset-0 -mr-3.5 bg-gradient-to-r from-[#FFA5A5] to-[#7366FF] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 rounded-3xl"></div>
                <div className="relative bg-white shadow-lg rounded-3xl py-10">
                    <div className="px-16 py-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="text-left m-auto text-[#300722]">
                                <div className="lg:hidden mx-auto w-3/4 lg:mt-16 lg:ml-16">
                                    <LottieAnimation lottie_animation_data={HeroSectionAnimation} />
                                </div>
                                <div className="text-6xl font-bold leading-none">
                                    Navigating Stress with Confidence
                                </div>
                                <div className="mt-6 text-xl font-light text-true-gray-500 antialiased">
                                    Discover a harmonious life where stress is not the ruler. Together, we'll
                                    equip you with strategies to conquer stress, providing you with the keys
                                    to unlock a balanced, healthier, and more vibrant future. Your journey to
                                    serenity starts now.
                                </div>
                                <Button
                                    additional_classes={"my-8 lg:px-10 md:px-6 px-6 py-3 text-white bg-[#7366FF] text-2xl font-bold"}
                                    button_text={"Get Started"}
                                    flex_start={true} button_function={redirect_to_register}
                                />
                            </div>
                            <div className="hidden lg:flex relative w-full lg:ml-16">
                                <LottieAnimation lottie_animation_data={HeroSectionAnimation} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </section>
    );
}

export default SectionHero;
