import React from 'react';
import { primaryButtonClass } from '../utils/styles';

const Button = ({additional_classes, button_text, flex_start, button_type, button_function}) => {
    return (
        <>
            <div className={`flex flex-col ${flex_start? "justify-start" : "justify-center items-center "}`}>
                <div className="z-10">
                    <button
                        type={`${button_type? button_type : "button"}`}
                        className={`${additional_classes} ${primaryButtonClass}`}
                        onClick={button_function? button_function: ()=>{}}
                    >
                        {button_text}
                    </button>
                </div>
            </div>
        </>
    );
};

export default Button;
