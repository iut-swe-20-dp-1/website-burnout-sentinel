import React from 'react'

const FormMessage = ({bg_class, message}) => {
    return (
        <div className={`flex items-center ${bg_class} p-4 mb-3 rounded w-full`}>

            <div className={`flex-grow text-center ${bg_class} text-[#300722] text-bold rounded-[7px]  text-[1.2em]`}>
                {message}
            </div>
        </div>
    )
}

export default FormMessage