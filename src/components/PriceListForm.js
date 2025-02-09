import { useState } from "react";
import InputMask from "react-input-mask";

const PriceListForm = ({ t, onSubmit, loading, successMessage }) => {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        company: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
    };

    return (
        <form onSubmit={handleSubmit} className="p-8 rounded space-y-4 flex flex-col justify-end relative bg-gradient-to-br from-success/80 backdrop-blur-lg to-green-500  ">
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
                    <span className="text-blue-500 font-bold">{t.sending}</span>
                </div>
            )}

            <h2 className="text-2xl font-bold mb-6 text-white">{t.header}</h2>
            <input
                type="text"
                name="name"
                placeholder={t.placeholders.name}
                value={form.name}
                onChange={handleChange}
                className="w-full p-2  rounded bg-white/20 focus:bg-white/40 focus:outline-none  placeholder-white placeholder-opacity-80"
                required
                disabled={loading}
            />
            <InputMask
                mask="+7 (999) 999-99-99"
                type="tel"
                name="phone"
                placeholder={t.placeholders.phone}
                value={form.phone}
                onChange={handleChange}
                className="w-full p-2  rounded bg-white/20 focus:bg-white/40 focus:outline-none  placeholder-white placeholder-opacity-80"
                required
                disabled={loading}
            />
            <input
                type="email"
                name="email"
                placeholder={t.placeholders.email}
                value={form.email}
                onChange={handleChange}
                className="w-full p-2  rounded bg-white/20 focus:bg-white/40 focus:outline-none  placeholder-white placeholder-opacity-80"
                required
                disabled={loading}
            />
            <input
                type="text"
                name="company"
                placeholder={t.placeholders.company}
                value={form.company}
                onChange={handleChange}
                className="w-full p-2  rounded bg-white/20 focus:bg-white/40 focus:outline-none  placeholder-white placeholder-opacity-80"
                required
                disabled={loading}
            />
            <button type="submit" className="w-full bg-white font-bold p-2 rounded" disabled={loading}>
                {loading ? t.sending : t.button}
            </button>
            {successMessage && (
                <p className="text-green-500 text-center mt-2">{successMessage}</p>
            )}
        </form>
    );
};

export default PriceListForm;
