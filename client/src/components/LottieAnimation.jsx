import React from 'react'
import LottiePlayer from "react-lottie-player"

const LottieAnimation = ({ lottie_animation_data,
  is_looped,
  animation_speed,
  start_frame,
  end_frame,
  style_classes, }) => {
  const startFrame = start_frame ? start_frame : 0
  const endFrame = end_frame ? end_frame : lottie_animation_data.op;
  return (
    <LottiePlayer
      loop={is_looped}
      animationData={lottie_animation_data}
      play
      speed={animation_speed}
      segments={[startFrame, endFrame]}
      className={`${style_classes}`}
    />
  )
}

export default LottieAnimation