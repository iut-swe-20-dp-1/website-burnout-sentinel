import React from "react";

const BottomNotification = ({text}) => {
  return (
    <div
      id="toast-simple"
      className="fixed bottom-5 right-5 z-30 flex items-center w-full max-w-md p-4 border-2 border-[#a9a2fc] space-x-4 text-black bg-white divide-x divide-gray-200 rounded-lg shadow space-x font-bold"
      role="alert"
    >
      <div className="pl-4 text-md font-normal">{text}</div>
    </div>
  );
};

export default BottomNotification;