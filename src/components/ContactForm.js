import React, { useContext } from 'react'; // Добавлен useContext
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'; // Импортируем нужную иконку
import WhatsAppButton from './WhatsAppButton'; // Импортируем компонент WhatsAppButton
import { TranslationContext } from '../TranslationContext';

function ContactForm() {
    const { polyglot } = useContext(TranslationContext);

    return (
        <div id="footer" className="hero bg-base-100  h-[380px]"
            style={{
                backgroundImage: "url(https://mosmetalltv.ru/wp-content/uploads/2021/03/bceaa99f805765b2349a2e68f510d4ea-768x432.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="hero-overlay bg-blue-900 bg-opacity-80"></div>
            <div className='container mx-auto '>
                <div className='py-10 flex items-center justify-center flex-col '>
                    <div className="flex items-center justify-center mb-4">
                        <FontAwesomeIcon icon={faCommentDots} className="text-white text-3xl" /> {/* Иконка над заголовком */}
                    </div>
                    <h2 className="text-3xl font-bold text-center text-white mb-6">   {polyglot.t('contact.title')}</h2>
                    <h3 className="text-xl text-center text-white mb-4">{polyglot.t('contact.subtitle')}</h3>
                    <WhatsAppButton />
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
