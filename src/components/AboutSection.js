import React, { useContext } from 'react';
import oilImage from './about/s3.png';
import { TranslationContext } from '../TranslationContext';

// Объект с переводами
const translations = {
  en: {
    text: 'The trading and logistics company "AIVA.KZ" LLP is a supplier of "AIVA" vegetable oil and other types of edible oils.',
  },
  ru: {
    text: 'Торгово-логистическая компания ТОО "AIVA.KZ" является поставщиком растительного масла «AIVA», и других видов пищевых масел.',
  },
};

const AboutSection = () => {
  const { language } = useContext(TranslationContext);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2">
        <div>
          <img src={oilImage} alt="Aiva масло" />
        </div>
        <p className="p-5">
          {translations[language].text}
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
