import React, { useState } from 'react';
import { inputFieldClass, labelClass } from '../utils/styles';

const Test = () => {
    const [csv, setCsv] = useState(null);

    const handleFileChange = (e) => {
        setCsv(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("carried out")

        console.log(csv)
        const formData = new FormData()
        formData.append('csv', csv)

        try {
            // const url = 'https://ml-deployment-test.onrender.com/csv';
            const url = 'http://127.0.0.1:8000/csv';
            const response = await fetch(url, {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                console.log(response)
                const data = await response.json();
                const prediction = data.prediction;
                const classification = data.classification;

                console.log("Prediction:", prediction);
                console.log("Classification:", classification);
            } else {
                console.error("Failed to upload file.")
            }
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <form className="w-full md:w-full px-3 mb-2" onSubmit={handleSubmit}>
            <label className={labelClass} htmlFor="csv">
                CSV
            </label>
            <input
                className={inputFieldClass}
                type="file"
                name="csv"
                onChange={handleFileChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Test;
