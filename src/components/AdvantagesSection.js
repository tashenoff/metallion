import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faHandshake, faTruck, faFileAlt, faTag, faUsers } from '@fortawesome/free-solid-svg-icons';
import { TranslationContext } from '../TranslationContext'; // Импортируем контекст

function AdvantagesSection() {
    const { polyglot } = useContext(TranslationContext); // Используем контекст для получения переводов

    const advantages = [
        {
            text: polyglot.t("advantages.quality"),
            description: polyglot.t("advantages.qualityDescription"),
            icon: faCheckCircle,
        },

        {
            text: polyglot.t("advantages.logistics"),
            description: polyglot.t("advantages.logisticsDescription"),
            icon: faTruck,
        },
        {
            text: polyglot.t("advantages.documentation"),
            description: polyglot.t("advantages.documentationDescription"),
            icon: faFileAlt,
        },

        {
            text: polyglot.t("advantages.team"),
            description: polyglot.t("advantages.teamDescription"),
            icon: faUsers,
        }
    ];

    return (
        <div id="adv" className="py-10 bg-base-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-gray-700 text-left mb-6">
                    {polyglot.t("advantages.title")}
                </h2>
                <p className="text-left py-5">
                    {polyglot.t("advantages.description")}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-5">
                    {advantages.map((advantage, index) => (
                        <div
                            key={index}
                            className="card p-10 relative bg-blue-500 text-white shadow-md  flex flex-col items-center text-left"
                        >
                            <div className='bg-success/70 absolute -top-8 backdrop-blur-lg p-8  rounded-full w-5 h-5 flex items-center justify-center mb-3'>
                                <FontAwesomeIcon icon={advantage.icon} className="text-white text-2xl" />
                            </div>
                            <div className='mt-5'>
                                <h3 className="text-lg text-center font-semibold mb-2">{advantage.text}</h3>
                                <p className="text-sm text-center text-white">{advantage.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AdvantagesSection;
