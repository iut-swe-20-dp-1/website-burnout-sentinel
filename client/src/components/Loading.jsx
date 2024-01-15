import React from 'react'
import LottieAnimation from './LottieAnimation'
import loadingAnimation from '../assets/loadingAnimation.json'

const Loading = ({setBg, loadingMessage}) => {
    const bg = setBg? 'bg-[#a9a2fc] ': ''
    return (
        <div className={`w-full h-full ${bg}`}>
            <LottieAnimation lottie_animation_data={loadingAnimation} style_classes={"w-1/2  mx-auto"} />
            {loadingMessage && (<div className="text-center mb-4">
                <h2 className="text-xl tracking-tight">
                    {loadingMessage}
                </h2>
            </div>)}
            </div>
    )
}

export default Loading