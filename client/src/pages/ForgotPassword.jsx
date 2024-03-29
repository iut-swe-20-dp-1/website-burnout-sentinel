import React, { useState } from 'react'
import LottieAnimation from '../components/LottieAnimation'
import ForgotPasswordAnimation from '../assets/ForgotPasswordAnimation.json'
import { inputFieldClass, labelClass, secondaryButtonClass } from '../utils/styles'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import FormMessage from '../components/FormMessage'

const ForgotPasswordPage = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')
    const [wait, setWait] = useState('')

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const [formData, setFormData] = useState({
        email: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData.email)
    };


    // bg-gradient-to-l from-[#FFA5A5] to-[#a9a2fc]

    return (
        <>
            <div className=' min-h-screen flex flex-col w-full h-full bg-cover bg-fixed bg-center' style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1487147264018-f937fba0c817?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
            // style={{
            //     backgroundImage: "url(https://images.unsplash.com/photo-1517315003714-a071486bd9ea?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            // }}
            >

                <div className="flex justify-center my-2 mx-4 md:mx-0">
                    <form className="w-full max-w-4xl bg-white/80 my-4 backdrop-blur-sm rounded-lg shadow-md px-12 py-6" onSubmit={handleSubmit}>
                        <div className="text-center mb-8">
                            <h2 className="text-6xl font-bold text-[#7366FF] tracking-tight">
                                Forgot Your Password?
                            </h2>
                        </div>
                        <LottieAnimation lottie_animation_data={ForgotPasswordAnimation} style_classes={"w-2/6 mx-auto"} />
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-full px-3 mb-6">
                                <label className={`${labelClass}`} htmlFor='email'>Email</label>
                                <input className={`${inputFieldClass}`} type='email' name="email" value={formData.email} onChange={handleInputChange} required />
                            </div>

                            <div className="w-full md:w-full px-3">
                                <Button
                                    additional_classes={"my-2 lg:px-10 md:px-6 px-6 py-3 text-white bg-[#7366FF] text-2xl font-bold"}
                                    button_text={"Send Verification Mail"}
                                    button_type={"submit"}
                                />
                            </div>
                            {success && <FormMessage bg_class={"bg-green-300"} message={success} />}
                            {error && !wait && <FormMessage bg_class={"bg-red-400"} message={error} />}
                            {wait && <FormMessage bg_class={"bg-yellow-300"} message={wait} />}
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ForgotPasswordPage