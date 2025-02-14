// src/components/Navbar.js
import React, { useContext } from 'react';
import PhoneNumber from './PhoneNumber';
import LanguageSwitcher from './LanguageSwitcher';
import { TranslationContext } from '../TranslationContext';
import Menu from './Menu';
import { useScroll } from '../hooks/useScroll';

function Navbar() {
    const { polyglot } = useContext(TranslationContext);
    const isScrolled = useScroll();

    // Конфигурация меню
    const menuItems = [
        { href: "#services", label: polyglot.t('services') },
        { href: "#adv", label: polyglot.t('advantages_menu') },
        { href: "#footer", label: polyglot.t('contacts_menu') },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'bg-opacity-70 backdrop-blur-md shadow-md bg-gray-900' : 'bg-transparent'} fixed border-b border-white border-opacity-15 text-white top-0 w-full z-50 transition-all duration-300`}>
            <div className="container mx-auto">
                <div className="navbar-start flex items-center">
                    {/* Мобильное меню */}
                    <div className="dropdown">
                        <button tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </button>
                        <Menu items={menuItems} className="menu-sm dropdown-content bg-green-800 rounded-box z-[1] mt-3 w-52 p-2 shadow" />
                    </div>

                    {/* Логотип */}
                    <a href="/" className="hidden lg:block">
                        <img className="w-[144px]" src="logo.svg" alt="Logo" />
                    </a>
                </div>

                {/* Десктопное меню */}
                <div className="navbar-center hidden lg:flex justify-start">
                    <Menu items={menuItems} className="menu-horizontal px-1" />
                </div>

                {/* Контакты и языковой переключатель */}
                <div className="grid grid-cols-2">
                    <div className="navbar-end">
                        <div className="flex items-center justify-start w-full">
                            <PhoneNumber />
                        </div>
                    </div>
                    <div className="flex items-center justify-end">
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;