import React, { useContext } from 'react';
import oilImage from './about/about.jpeg';
import { TranslationContext } from '../TranslationContext';

const translations = {

  ru: {
    title: 'Строим крепкие деловые отношения',
    text: 'Компания Metallion — надежный поставщик металлопроката по всему Казахстану. Мы предлагаем широкий ассортимент черного и цветного металла для строительных и производственных нужд. Обеспечиваем качественный сервис, консультации и доставку в кратчайшие сроки. Наши специалисты помогут подобрать нужный материал под ваши задачи.',
  },
  en: {
    title: 'Берік іскерлік қатынастарды құрамыз',
    text: 'Metallion компаниясы — бүкіл Қазақстан бойынша металлопрокаттың сенімді жеткізушісі. Біз құрылыс және өндірістік қажеттіліктерге арналған қара және түсті металдардың кең ассортиментін ұсынамыз. Жоғары сапалы қызмет, кеңес беру және қысқа мерзімді жеткізуді қамтамасыз етеміз. Біздің мамандар сіздің міндеттеріңізге қажетті материалды таңдауға көмектеседі.',
  },
};

const AboutSection = () => {
  const { language } = useContext(TranslationContext);

  return (
    <section className=" mx-auto py-4 ">
      <div className='container'>
        <div className="grid md:grid-cols-2 gap-8 items-center bg-white shadow-lg rounded-lg p-6">
          <div className="overflow-hidden rounded-lg">
            <img src={oilImage} alt="About" className=" rounded-lg" />
          </div>
          <div className="text-gray-700">
            <h2 className="text-3xl font-bold mb-6">{translations[language].title}</h2>
            <p className=" leading-relaxed">{translations[language].text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
