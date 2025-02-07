import { useState, useContext } from "react";
import { TranslationContext } from "../TranslationContext";

const translations = {
    ru: {
        title: "Получите прайс-лист на весь метал прямо сейчас",
        description: "Вышлем сейчас весь прайскурант вам на почту",
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

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        company: "",
    });
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMessage("");

        const scriptURL = "https://script.google.com/macros/s/AKfycbyJdWMa___LM93Mug4L8dl45xmX0E-_N487LiWhbY1H5L_xXGcaqrLdEJKzhmZKdc_NRg/exec";

        try {
            await fetch(scriptURL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
                mode: "no-cors",
            });
            setSuccessMessage(t.success);
            setForm({ name: "", phone: "", email: "", company: "" });
        } catch (error) {
            console.error("Ошибка:", error);
            setSuccessMessage(t.error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section 
        className="h-full my-10 py-10 lg:h-[400px] flex items-center justify-center relative"
        style={{ 
            backgroundImage: "url('https://mc-rus.ru/assets/images/demos/demo-14/slider/slide-1.jpg')", 
            backgroundSize: "cover", 
            backgroundPosition: "center" 
        }}
    >
        {/* Маска поверх фона */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-4">
                    <div className="p-5 flex flex-col items-start w-full">
                        <h2 className="text-3xl font-bold mb-6 text-white">{t.title}</h2>
                        <p className="text-white">{t.description}</p>
                    </div>
                    <form onSubmit={handleSubmit} className="p-4 border bg-white rounded space-y-4 flex flex-col justify-end relative">
                        {loading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
                                <span className="text-blue-500 font-bold">{t.sending}</span>
                            </div>
                        )}
                        <input
                            type="text"
                            name="name"
                            placeholder={t.placeholders.name}
                            value={form.name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                            disabled={loading}
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder={t.placeholders.phone}
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                            disabled={loading}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder={t.placeholders.email}
                            value={form.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                            disabled={loading}
                        />
                        <input
                            type="text"
                            name="company"
                            placeholder={t.placeholders.company}
                            value={form.company}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                            disabled={loading}
                        />
                        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded" disabled={loading}>
                            {loading ? t.sending : t.button}
                        </button>
                        {successMessage && (
                            <p className="text-green-500 text-center mt-2">{successMessage}</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default PriceListAccess;