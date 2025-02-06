// src/components/FAQSection.js
import React from 'react';

function FAQSection() {
    // Массив вопросов и ответов
    const faqs = [
        {
            question: "Сколько времени занимает заправка картриджа?",
            answer: "Время заправки картриджа обычно занимает от 15 до 30 минут, в зависимости от модели картриджа и его состояния.",
        },
        {
            question: "Сколько раз можно заправлять один и тот же картридж?",
            answer: "Большинство картриджей можно заправлять несколько раз (до 5-7 заправок), но это зависит от их состояния и качества печати.",
        },
        {
            question: "Как узнать, что картридж нужно заправить?",
            answer: "Признаками необходимости заправки являются тусклый или прерывистый текст, а также наличие белых полос на распечатках.",
        },
        {
            question: "Заправка картриджа ухудшает его качество?",
            answer: "При правильной заправке картриджа качество печати не должно пострадать. Важно использовать качественный тонер и обратиться к профессионалам.",
        },
        {
            question: "Можно ли заправлять картридж самостоятельно?",
            answer: "Заправка картриджа требует специальных знаний и оборудования, поэтому рекомендуется доверять эту процедуру специалистам.",
        },
    ];

    return (
        <div className="container mx-auto py-10 px-4">
            <h2 className="text-3xl font-bold text-center mb-6">Часто задаваемые вопросы</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="collapse collapse-arrow border border-base-200 bg-base-100 rounded-box">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-medium">
                            {faq.question}
                        </div>
                        <div className="collapse-content">
                            <p className="text-gray-600">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FAQSection;
