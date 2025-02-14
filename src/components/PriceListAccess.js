import { useState, useContext } from "react";
import { TranslationContext } from "../TranslationContext";
import PriceListForm from "./PriceListForm"; // Импортируем новый компонент

const translations = {
    ru: {
        title: "Получите прайс-лист на весь метал прямо сейчас",
        description: "Вышлем сейчас весь прайскурант вам на почту",
        header: "Получить прайс-лист",
        placeholders: {
            name: "Ваше имя",
            phone: "Номер телефона",
            email: "Email",
            company: "Название компании"
        },
        button: "Получить прайс",
        sending: "Отправка...",
        success: "Прайс успешно отправлен на вашу почту!",
        error: "Произошла ошибка. Попробуйте снова."
    },
    en: {
        title: "Барлық металл бойынша прайс-парақты дәл қазір алыңыз",
        description: "Барлық прайс-парақты сіздің поштаңызға жібереміз",
        header: "Получить прайс-лист",
        placeholders: {
            name: "Сіздің атыңыз",
            phone: "Телефон нөмірі",
            email: "Email",
            company: "Компания атауы"
        },
        button: "Прайсты алу",
        sending: "Жіберілуде...",
        success: "Прайс сәтті жіберілді!",
        error: "Қате пайда болды. Қайталап көріңіз."
    }
};

const PriceListAccess = () => {
    const { language } = useContext(TranslationContext);
    const t = translations[language] || translations.ru;

    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = async (formData) => {
        setLoading(true);
        setSuccessMessage("");
    
        // Добавляем кавычку перед номером
        const modifiedData = {
            ...formData,
            phone: `'${formData.phone}`
        };
    
        const scriptURL = "https://script.google.com/macros/s/AKfycbyJdWMa___LM93Mug4L8dl45xmX0E-_N487LiWhbY1H5L_xXGcaqrLdEJKzhmZKdc_NRg/exec";
    
        try {
            await fetch(scriptURL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(modifiedData),
                mode: "no-cors",
            });
            setSuccessMessage(t.success);
        } catch (error) {
            console.error("Ошибка:", error);
            setSuccessMessage(t.error);
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <section id="price-form" 
            className="h-full my-10 py-10 lg:h-[500px] flex items-center justify-center relative"
            style={{ 
                backgroundImage: "url('/images/bg.webp')", 
                backgroundSize: "cover", 
                backgroundPosition: "center" 
            }}
        >
            {/* Маска поверх фона */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-20"></div>

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-4">
                    <div className="p-5 flex flex-col items-start w-full">
                    <h2 className="text-3xl font-bold mb-6 text-white">{t.title}</h2>
                    
                        <p className="text-white">{t.description}</p>
                    </div>
                    <PriceListForm 
                        t={t} 
                        onSubmit={handleSubmit} 
                        loading={loading} 
                        successMessage={successMessage} 
                    />
                </div>
            </div>
        </section>
    );
};

export default PriceListAccess;