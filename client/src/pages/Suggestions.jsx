import React, { useState } from 'react';
import { inputFieldClass, labelClass } from '../utils/styles';
import { mlUrl } from '../utils/urls';

const Suggestions = () => {
    const [keyword, setKeyword]=useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("carried out")
        
        const formData = new FormData()
        formData.append('keyword', 'keyword')

        try {
            const url = `${mlUrl}/get-suggestions`;
            console.log(formData.values.length)
            const response = await fetch(url, {
                method: "GET",
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Data:", data);
            } else {
                if(response.message){
                    console.log(response.message)
                } else {
                    console.log("Something went wrong!")
                }
            }
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <form className="w-full md:w-full px-3 mb-2" onSubmit={handleSubmit}>
            {/* <label className={labelClass} htmlFor="csv">
                CSV
            </label>
            <input
                className={inputFieldClass}
                type="text"
                name="csv"
                onChange={(e)=>setKeyword(e.target.value)}
            /> */}
            <button type="submit">Submit</button>
        </form>
    );
};

export default Suggestions;
