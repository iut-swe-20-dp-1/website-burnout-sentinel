import React from 'react';

const SectionAboutUs = () => {
    return (
        <section id="about_us" className="px-20 pb-10 space-y-8 text-justify bg-[#FFDFDF]">
            <h1 className="text-4xl text-center my-12 text-[#7366FF] font-bold">About Burnout Sentinels</h1>

            <p>
                Burnout Sentinels started as a prototype project with a mission to help you manage stress. Our main focus is on undergraduate university students, just like you.
                <br /><br />

                What's at the heart of our project? An AI model that predicts your stress level from 0 to 10, and it does so using your body's data like heart rate, temperature, and GSR (that's Galvanic Skin Response).
                <br /><br />

                Here's the cool part: our AI model learned from real data collected from students in the Computer Science and Engineering department at the Islamic University of Technology. We made sure to follow a proper study plan to make it super accurate.
                <br /><br />
                Curious about all the nitty-gritty details? <a href="/learn-more" className="text-blue-500">Learn More</a>
            </p>
        </section>
    );
};

export default SectionAboutUs;
