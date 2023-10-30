import React, { useEffect, useState } from 'react'
import LottieAnimation from '../LottieAnimation'
import GettingScoresAnimation from '../../assets/GettingScoresAnimation.json'
import { HiInformationCircle } from 'react-icons/hi';
import { suggestions } from '../../utils/content';

const StressScoreContent = ({ message, score }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (score > 0) {
            let animationInterval = setInterval(() => {
                setCount((prevCount) => {
                    if (prevCount < score) {
                        return prevCount + 0.3;
                    } else {
                        clearInterval(animationInterval);
                        return score;
                    }
                });
            }, 30); // Adjust the interval duration as needed
            return () => clearInterval(animationInterval);
        }
    }, [score]);

    const foundSuggestion = suggestions.find(
        (suggestion) => score >= suggestion.lower && score <= suggestion.upper
    );

    return (
        <>
            <LottieAnimation lottie_animation_data={GettingScoresAnimation} end_frame={130} style_classes={"w-2/3 mx-auto  -mt-14 -mb-24"} />
            <div className="text-center mb-4">
                <h2 className="text-3xl  tracking-tight">
                    {message}
                </h2>
                <h1 className='text-7xl text-[#7366FF] font-bold mt-3'>{count.toFixed(1)}</h1>
            </div>

            <div className="text-center mb-4">
                <h2 className="text-xl  tracking-tight">
                    {foundSuggestion.suggestion}
                </h2>
            </div>

            <div className='bg-yellow-200 text-left p-2 my-2 flex items-center'>
                <HiInformationCircle className='text-[#300722] text-5xl mr-2' />
                <p> Disclaimer: Please be aware that the score and the information provided on this website are not a replacement for professional guidance. If you believe you are at risk of adverse effects, we strongly recommend consulting a qualified medical professional.</p>
            </div>
        </>
    )
}

export default StressScoreContent
