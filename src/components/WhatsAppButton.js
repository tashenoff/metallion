import React, { useContext } from 'react'; // Добавлен useContext
import { TranslationContext } from '../TranslationContext';

function WhatsAppButton() {
    const { polyglot } = useContext(TranslationContext);
    const whatsappNumber = "+77781647391"; // Определяем переменную с номером телефона для WhatsApp

    const handleClick = () => {
        const message = "Здравствуйте!"; // Сообщение по умолчанию, которое будет отправлено
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, "_blank"); // Открываем ссылку в новой вкладке
    };

    return (
        <button 
            onClick={handleClick}
            className="btn btn-success mt-4"
        >
            {polyglot.t('sendwp')}
        </button>
    );
}

export default WhatsAppButton;
