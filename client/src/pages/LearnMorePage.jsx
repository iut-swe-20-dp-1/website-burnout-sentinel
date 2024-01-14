import React from 'react';
import UserSidebar from '../components/UserSidebar';
import LearnMoreCards from '../components/LearnMorePage/LearnMoreCards';
import DocumentsAnimation2 from '../assets/DocumentsAnimation2.json';
import { howDidWeDoIt, howToDoIt } from '../utils/content';

const LearnMorePage = () => {
    return (<>

        <div className='bg-[#FFDFDF]' style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1487147264018-f937fba0c817?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}>
            <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
            <div id="main-content" className="relative overflow-y-auto ">
                <main>

                    <section id="about_us" className="px-20 pb-10 text-justify bg-[#FFDFDF]">
                        <h1 className="text-4xl py-4 text-center text-[#7366FF] font-bold">What is Burnout Sentinels?</h1>

                        <p>
                            Burnout Sentinels started as a prototype project with a mission to help you manage stress. Our main focus is on undergraduate university students, just like you.
                            <br /><br />

                            What's at the heart of our project? An AI model that predicts your stress level from 0 to 10, and it does so using your body's data like heart rate, temperature, and GSR (that's Galvanic Skin Response).
                            <br /><br />

                            Here's the cool part: our AI model learned from real data collected from students in the Computer Science and Engineering department at the Islamic University of Technology. We made sure to follow a proper study plan to make it super accurate.
                            <br />
                        </p>
                    </section>


                    <div className="pt-6 px-4">


                        <h1 className='text-5xl mb-6 text-center text-[#7366FF] font-bold'>A Little Guide About How To Get Started</h1>
                        {howToDoIt.map((card, index) => (
                            <LearnMoreCards
                                key={index}
                                card_bg_color={card.card_bg_color}
                                start={card.start}
                                header={card.header}
                                description={card.description}
                                img={card.img}
                            />
                        ))}


                        <h1 className='text-5xl mt-20 mb-6 text-center text-[#7366FF] font-bold'>How Did We Do It?</h1>
                        {howDidWeDoIt.map((card, index) => (
                            <LearnMoreCards
                                key={index}
                                card_bg_color={card.card_bg_color}
                                start={card.start}
                                header={card.header}
                                description={card.description}
                                img={card.img}
                            />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    </>
    );
};

export default LearnMorePage;
