import React, { useState } from 'react';
import { inputFieldClass, labelClass } from '../utils/styles';
import { mlUrl } from '../utils/urls';

const Test = () => {
    const [csv, setCsv] = useState(null);
    const [message, setMessage] = useState('')

    const handleFileChange = (e) => {

        const selectedFile = e.target.files[0];

        if (selectedFile) {
            const reader = new FileReader();

            reader.onload = (event) => {
                const content = event.target.result;
                const lines = content.split('\n');

                if (lines.length < 40 && lines.length > 10000) {
                    setMessage('File contains less than 40 rows or more than 10000 rows. Please choose a valid file.');
                    setCsv(null); // Reset the selected file
                } else {
                    setMessage("Successfully uploaded CSV with " + lines.length + " rows.");
                    setCsv(selectedFile);
                }
            };

            reader.readAsText(selectedFile);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("carried out")
        setMessage('Wait!')

        console.log(csv)
        const formData = new FormData()
        formData.append('csv', csv)

        try {
            const url = `${mlUrl}/csv`;
            const response = await fetch(url, {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                const prediction = data.prediction;
                const classification = data.classification;

                console.log("Prediction:", prediction);
                console.log("Classification:", classification);
                setMessage(`Prediction: ${prediction} and stress level is ${classification}`)
            } else {
                if(response.message){
                    console.log(response.message)
                } else {
                    console.log("Something went wrong!")
                    setMessage('Something went wrong!')
                }
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
                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" 
            />
            <button type="submit">Submit</button>
        <h1>{message}</h1>
        </form>
    );
};

export default Test;
