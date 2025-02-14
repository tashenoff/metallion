import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import ScrollArrow from './ScrollArrow';
import { TranslationContext } from '../TranslationContext';
import { faFileAlt } from "@fortawesome/free-solid-svg-icons"; // Импорт иконки
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HeroSection() {
  const { polyglot } = useContext(TranslationContext);

  const scrollToPriceForm = () => {
    const priceForm = document.getElementById('price-form');
    if (priceForm) {
      priceForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url('/images/glavnaya_2l_1_min_1_min.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      id="home"
      className="hero relative h-[600px] bg-base-200"
    >
        <div className="absolute inset-0 bg-gray-900 bg-opacity-20"></div>
      <div className='container'>
        <div className="hero-content text-start relative z-10">
          <div className="w-full flex items-start justify-center flex-col">
            <motion.img
              className="w-[200px] lg:hidden mb-10"
              src="logo.svg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />

            <motion.h1
              className="lg:text-5xl text-3xl text-white/70 font-bold"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {polyglot.t('hero.title')}
            </motion.h1>

            <motion.p
              className="py-6 text-white/80"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {polyglot.t('hero.description')}
            </motion.p>

            <motion.button
              onClick={scrollToPriceForm}
              className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-700 transition flex items-center gap-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <FontAwesomeIcon icon={faFileAlt} className="text-white text-lg" />
              {polyglot.t("hero.button")}
            </motion.button>
          </div>
        </div>
      </div>

      <ScrollArrow className="bottom-5 absolute animate-bounce z-10" direction="down" targetId="services" />
    </div>
  );
}

export default HeroSection;
