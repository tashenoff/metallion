import React, { useContext } from 'react';
import { TranslationContext } from '../TranslationContext';

const translations = {
  ru: {
    title: 'Часто задаваемые вопросы',
    faqs: [
      {
        question: 'Какой металлопрокат вы предлагаете?',
        answer: 'Мы предлагаем широкий ассортимент черного и цветного металлопроката, включая арматуру, листы, трубы, балки и уголки.',
      },
      {
        question: 'Можно ли заказать доставку металлопроката?',
        answer: 'Да, мы осуществляем доставку по всему Казахстану. Условия доставки зависят от объема заказа и региона.',
      },
      {
        question: 'Как оформить заказ?',
        answer: 'Вы можете оставить заявку на сайте или связаться с нашими менеджерами по телефону.',
      },
      {
        question: 'Есть ли у вас скидки для оптовых покупателей?',
        answer: 'Да, у нас предусмотрены гибкие скидки для оптовых заказчиков. Свяжитесь с нами для получения подробной информации.',
      },
      {
        question: 'Как можно оплатить заказ?',
        answer: 'Мы принимаем оплату наличными, банковским переводом и по безналичному расчету.',
      },
    ],
  },
  en: {
    title: 'Жиі қойылатын сұрақтар',
    faqs: [
      {
        question: 'Сіз қандай металлопрокат ұсынасыз?',
        answer: 'Біз қара және түсті металлопрокаттың кең ассортиментін ұсынамыз, оның ішінде арматура, қаңылтыр, құбырлар, арқалықтар және бұрыштар бар.',
      },
      {
        question: 'Металлопрокатты жеткізуге бола ма?',
        answer: 'Иә, біз Қазақстан бойынша жеткізу қызметін ұсынамыз. Жеткізу шарттары тапсырыс көлеміне және аймаққа байланысты.',
      },
      {
        question: 'Тапсырысты қалай рәсімдеуге болады?',
        answer: 'Сіз біздің сайтта өтініш қалдыра аласыз немесе телефон арқылы менеджерлерімізбен байланыса аласыз.',
      },
      {
        question: 'Көтерме сатып алушыларға жеңілдіктер қарастырылған ба?',
        answer: 'Иә, бізде көтерме сатып алушылар үшін икемді жеңілдіктер қарастырылған. Толық ақпарат алу үшін бізбен хабарласыңыз.',
      },
      {
        question: 'Төлемді қалай жасауға болады?',
        answer: 'Біз қолма-қол ақшамен, банктік аударыммен және қолма-қол ақшасыз есеп айырысуды қабылдаймыз.',
      },
    ],
  },

};

function FAQSection() {
  const { language } = useContext(TranslationContext);
  const { title, faqs } = translations[language] || translations.ru;

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-gray-700 text-center mb-6">{title}</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="collapse collapse-arrow border border-base-200 bg-base-100 rounded-box">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">{faq.question}</div>
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
