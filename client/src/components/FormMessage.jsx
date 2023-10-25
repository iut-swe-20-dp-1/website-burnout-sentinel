import React from 'react'

const FormMessage = ({bg_color}) => {
    return (
        <div className={`flex items-center bg-${bg_color} p-4 mb-3 rounded w-full`}>
            <div className="flex-grow text-center pl-5 text-[#300722] text-bold rounded-[7px]  text-[1.2em]">
                Validating user...
            </div>
        </div>
    )
}

export default FormMessage