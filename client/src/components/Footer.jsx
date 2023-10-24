import React from 'react';
import { Link } from 'react-router-dom';
import {landingPageFooterLinks} from "../utils/content"

const Footer = () => {
    return (
        <footer className="pt-10 sm:mt-10 w-full">
            <div className="max-w-6xl m-auto text-[#300722] flex flex-wrap justify-left">
                {landingPageFooterLinks.map((section, index) => (
                    <div key={index} className="p-5 w-1/2 sm:w-1/2 md:w-1/3">
                        <div className="text-xs uppercase font-medium mb-6">{section.title}</div>
                        {section.links.map((link, i) => (
                            <Link key={i} to={link.to} className="my-3 block text-sm font-medium duration-700">
                                {link.text}
                            </Link>
                        ))}
                    </div>
                ))}
            </div>

            <div className="pt-2">
                <div className="flex pb-5 px-3 m-auto pt-2 border-t border-gray-500 text-[#300722] text-lg flex-col md:flex-row max-w-6xl">
                    <div className="mt-2">© Copyright 2023-Burnout Sentinel. All Rights Reserved.</div>                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;
