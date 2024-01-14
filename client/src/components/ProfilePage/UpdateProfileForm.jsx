import React, { useState } from 'react'
import { inputFieldClass, labelClass, secondaryButtonClass } from '../../utils/styles';
import { Link } from 'react-router-dom';
import Button from '../Button';
import FormMessage from '../FormMessage';

const UpdateProfileForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState('')
    const [wait, setWait] = useState('')

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }

    const [formData, setFormData] = useState({
        email: '',
        username: '',
        dob: '',
        name: '',
        gender: '',
        pic: null,
    });
    const [userimg, setUserimg] = useState(null)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const { name } = e.target;
        const file = e.target.files[0];
        setFormData({ ...formData, [name]: file });
    }
    return (
        <>
            <div className="flex justify-center">
                <form className="w-full bg-white/90 my-8 rounded-lg shadow-md px-24 pt-6" onSubmit={handleSubmit}>
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-[#7366FF] tracking-tight">
                            Your Profile
                        </h2>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-full px-3 mb-6">
                            <label className={`${labelClass}`} htmlFor='pic'>Profile Image</label>
                            {userimg && (<img src={userimg} alt='current_pfp'/>)}
                            <input className={`${inputFieldClass}`} type="file" accept=".png, .jpeg, .jpg, .gif" name="pic" onChange={handleFileChange} />
                        </div>

                        <div className="w-full md:w-full px-3 mb-6">
                            <label className={`${labelClass}`} htmlFor='name'>Full Name</label>
                            <input className={`${inputFieldClass}`} type='text' name="name" value={formData.name} onChange={handleInputChange} required />
                        </div>

                        <div className="w-full md:w-full px-3 mb-6">
                            <label className={`${labelClass}`} htmlFor='username'>Username</label>
                            <input className={`${inputFieldClass}`} type='text' name="username" value={formData.username} onChange={handleInputChange} required />
                        </div>

                        <div className="w-full md:w-full px-3 mb-6">
                            <label className={`${labelClass}`} htmlFor='email'>Email</label>
                            <input className={`${inputFieldClass} cursor-not-allowed`} type='email' name="email" value={formData.email} onChange={handleInputChange} readOnly />
                        </div>

                        <div className="w-full md:w-full px-3 mb-6">
                            <label className={`${labelClass}`} htmlFor='dob'>Date of Birth</label>
                            <input className={`${inputFieldClass}`} type='date' name="dob" value={formData.dob} onChange={handleInputChange} required />
                        </div>

                        <div className="w-full md:w-full px-3 mb-6">
                            <label className={`${labelClass}`} htmlFor='gender'>Gender</label>
                            <select className={`${inputFieldClass}`} id="gender" name="gender" value={formData.gender} onChange={handleInputChange} required>
                                <option value="" disabled selected>Select your gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>

                        {success && <FormMessage bg_class={"green-300"} message={success} />}
                        {error && !wait && <FormMessage bg_class={"red-300"} message={error} />}
                        {wait && <FormMessage bg_class={"yellow-300"} message={wait} />}
                        {message && !success && <FormMessage bg_class={"yellow-300"} message={message} />}

                        <div className="w-full md:w-full px-3">
                            <Button
                                additional_classes={"my-2 lg:px-10 md:px-6 px-6 py-3 text-white bg-[#7366FF] text-2xl font-bold"}
                                button_text={"Save Changes"}
                                button_type={"submit"}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default UpdateProfileForm