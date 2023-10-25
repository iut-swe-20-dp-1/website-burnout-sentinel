import React from 'react'
import LottiePlayer from "react-lottie-player"

const LottieAnimation = ({ lottie_animation_data,
    is_looped,
    animation_speed,
    end_frame,
    style_classes, }) => {
    return (
        <LottiePlayer
        loop={is_looped}
        animationData={lottie_animation_data}
        play
        speed={animation_speed}
        segments={[0, end_frame]}
        className={`${style_classes}`}
      />
  )
}

export default LottieAnimation