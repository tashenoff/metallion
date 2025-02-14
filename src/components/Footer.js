// src/components/Footer.js
import React, { useContext } from 'react';
import ScrollArrow from './ScrollArrow';
import PhoneNumber from './PhoneNumber';
// import CompanyDetails from './CompanyDetails';
import { TranslationContext } from '../TranslationContext'; // Убедитесь, что путь правильный
import Contact from './Contact';

const translations = {
    en: {
        copyright: '© 2024 LLP "Metallion. All rights reserved."',
    },
    ru: {
        copyright: '© 2024 ТОО "Metallion. Все права защищены."',
    },
};

function Footer() {
    const { language } = useContext(TranslationContext);
    const { copyright } = translations[language] || translations['ru']; // Используем ru по умолчанию

    return (
        <footer className="bg-blue-800 text-base-content p-4">
            {/* <CompanyDetails /> */}
            <div className="container mx-auto flex items-center flex-col text-center">
                <ScrollArrow
                    className="bottom-10 bg-opacity-20 backdrop-blur-md bg-primary relative w-10 rounded-lg"
                    direction="top"
                    targetId="services"
                />
                <div className='w-full py-5 my-5 border-b lg:flex-row flex-col flex lg:justify-between items-center border-white/10'>
                    <Contact />
                    <PhoneNumber />
                </div>
                <p className="mb-2 text-white">{copyright}</p>



            </div>
        </footer>
    );
}

export default Footer;
