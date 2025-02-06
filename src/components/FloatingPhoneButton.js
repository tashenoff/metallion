import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function FloatingPhoneButton() {
    const phoneNumber = "+77781647391"; // Номер телефона для набора

    const handleClick = () => {
        window.location.href = `tel:${phoneNumber}`; // Переход к набору номера
    };

    return (
        <button 
            onClick={handleClick}
            className="fixed bottom-5 right-5 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition duration-300 flex items-center justify-center"
            style={{ 
                width: '60px',  // Устанавливаем ширину
                height: '60px', // Устанавливаем высоту
                zIndex: 1000 
            }}
        >
            <FontAwesomeIcon icon={faPhone} className="h-4 w-4" />
        </button>
    );
}

export default FloatingPhoneButton;
