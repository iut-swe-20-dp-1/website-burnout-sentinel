import React from 'react'
import CheckMarkAnimation from '../../assets/CheckMarkAnimation.json'
import LottieAnimation from '../LottieAnimation'

const FormSuccess = ({ message }) => {
    return (
        <>
            <LottieAnimation lottie_animation_data={CheckMarkAnimation} style_classes={"w-2/3 mx-auto"}/>
            <div className="text-center my-4">
                <h2 className="text-3xl font-bold text-[#7366FF] tracking-tight">
                    {message}
                </h2>
            </div>
        </>
    )
}

export default FormSuccess