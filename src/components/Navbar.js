// src/components/Navbar.js
import React, { useContext, useEffect, useState } from 'react';
import PhoneNumber from './PhoneNumber';
import LanguageSwitcher from './LanguageSwitcher';
import { TranslationContext } from '../TranslationContext';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { polyglot } = useContext(TranslationContext);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`navbar ${isScrolled ? 'bg-opacity-70 backdrop-blur-md shadow-md bg-gray-900' : 'bg-transparent'} fixed border-b border-white border-opacity-15 text-white top-0 w-full z-50 transition-all duration-300`}>
            <div className="container mx-auto">
                <div className="navbar-start flex items-center">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-green-800 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a href="#services">{polyglot.t('services')}</a></li>
                            <li><a href="#adv">{polyglot.t('advantages')}</a></li>
                            <li><a href="#footer">{polyglot.t('contacts')}</a></li>
                        </ul>
                    </div>
                    <a href="/" className="">
                        <img className='w-[144px] lg:block hidden' src='logo.svg' />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex justify-start">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href="#services">{polyglot.t('services')}</a></li>
                        <li><a href="#adv">{polyglot.t('advantages')}</a></li>
                        <li><a href="#footer">{polyglot.t('contacts')}</a></li>
                    </ul>
                </div>
                <div className='grid grid-cols-2'>
                    <div className="navbar-end">
                        <div className='flex items-center justify-start w-full'>
                            <PhoneNumber />

                        </div>
                        
                    </div>
                    <div className='flex items-center justify-end'>  <LanguageSwitcher /></div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
