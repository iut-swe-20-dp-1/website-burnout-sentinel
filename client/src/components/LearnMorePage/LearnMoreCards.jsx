import React from 'react';
import LottieAnimation from '../LottieAnimation';

const LearnMoreCards = ({ start, card_bg_color, header, description, img }) => {
  return (
    <div className={`bg-[#${card_bg_color}] grid grid-cols-1 md:grid-cols-3 gap-4 my-3 mx-6 px-6 border-2 rounded-lg`}>
      {/* Lottie Animation */}
      {start && (
        <div className="col-span-1 md:col-span-1">
          <img src={img} className='h-64 md:h-90 rounded-lg m-2'/>
        </div>
      )}

      {/* Card Content */}
      <div className={`col-span-1 md:col-span-2`}>
        <div className="relative w-full h-full p-4 sm:px-6 lg:px-4 flex">
          <div className='my-auto'>
            <h1 className="text-[#300722] text-3xl mt-2 font-bold">{header}</h1>
            <p className="text-[#7366FF] text-xl mt-2">
             {description}
            </p>
          </div>
        </div>
      </div>

      {/* Lottie Animation (if not started initially) */}
      {!start && (
        <div className="col-span-1 md:col-span-1">
          <img src={img} className='h-64 md:h-90 rounded-lg m-2'/>
        </div>
      )}
    </div>
  );
};

export default LearnMoreCards;
