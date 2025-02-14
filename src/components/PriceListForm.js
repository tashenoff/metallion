import { useState, useRef } from "react";
import { triggerConfetti } from "../utils/confetti";
import InputField from "../components/InputField";

const PriceListForm = ({ t, onSubmit, loading, successMessage }) => {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        company: "",
    });

    const formRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);

        // Запуск конфетти
        triggerConfetti(formRef.current);

        // Очистка формы
        setForm({ name: "", phone: "", email: "", company: "" });
    };

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="p-8 rounded space-y-4 flex flex-col justify-end relative bg-gradient-to-br from-success/80 backdrop-blur-lg to-green-500"
        >
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
                    <span className="text-blue-500 font-bold">{t.sending}</span>
                </div>
            )}

            <h2 className="text-2xl font-bold mb-6 text-white">{t.header}</h2>

            <InputField
                type="text"
                name="name"
                placeholder={t.placeholders.name}
                value={form.name}
                onChange={handleChange}
                disabled={loading}
                required
            />
            <InputField
                type="tel"
                mask="+7 (999) 999-99-99"
                name="phone"
                placeholder={t.placeholders.phone}
                value={form.phone}
                onChange={handleChange}
                disabled={loading}
                required
            />
            <InputField
                type="email"
                name="email"
                placeholder={t.placeholders.email}
                value={form.email}
                onChange={handleChange}
                disabled={loading}
                required
            />
            <InputField
                type="text"
                name="company"
                placeholder={t.placeholders.company}
                value={form.company}
                onChange={handleChange}
                disabled={loading}
                required
            />

            <button
                type="submit"
                className="w-full bg-white font-bold p-2 rounded"
                disabled={loading}
            >
                {loading ? t.sending : t.button}
            </button>

            {successMessage && (
                <p className="text-white text-center mt-2">{successMessage}</p>
            )}
        </form>
    );
};

export default PriceListForm;