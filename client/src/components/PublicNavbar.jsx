import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from './Button'
import { navLinkClass } from '../utils/styles'

const PublicNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const redirect_to_login =()=>{
        navigate('/login');
    }
    return (
        <>
            <nav className="bg-white/70 backdrop-blur-md shadow-md flex justify-between w-full fixed top-0 left-0 right-0 z-20  text-[#300722]">
                <div className="px-5 xl:px-12 py-4 flex w-full items-center">
                    <Link className="text-xl font-bold font-heading flex items-center" to="/">
                        <img className="h-9 mr-4" src="logo.png" alt="logo" />
                        Burnout Sentinel
                    </Link>
                    <ul className={`${isMenuOpen? "hidden" : "block"} lg:flex px-4 mx-auto font-semibold font-heading lg:space-x-6 text-[#300722]`}>
                        <li><a className={navLinkClass} href="#home">Home</a></li>
                        <li><a className={navLinkClass} href="#symptoms">Symptoms</a></li>
                        <li><a className={navLinkClass} href="#features">Features</a></li>
                        <li><a className={navLinkClass} href="#about_us">About</a></li>
                    </ul>
                    <div className={`${isMenuOpen? "hidden" : "block"} lg:flex lg:space-x-4`}>
                        <Link className={`h-full m-auto font-bold text-[#7366FF] ${navLinkClass}`} to="/register">Register</Link>

                        <Button additional_classes={"lg:px-10 md:px-6 px-6 text-white bg-[#7366FF] "} button_text={"Login"} button_function={redirect_to_login}/>
                    </div>

                </div>

                <button className="navbar-burger self-center mr-12 lg:hidden" onClick={()=> setIsMenuOpen(!isMenuOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </nav>
        </>
    )
}

export default PublicNavbar



