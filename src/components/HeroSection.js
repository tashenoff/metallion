// src/components/HeroSection.js
import React, { useContext } from 'react';
import { motion } from 'framer-motion'; // Импортируем framer-motion
import ScrollArrow from './ScrollArrow';
import WhatsAppButton from './WhatsAppButton';
import { TranslationContext } from '../TranslationContext';

function HeroSection() {
  const { polyglot } = useContext(TranslationContext);

  return (
    <div
      style={{
        backgroundImage: `url('https://rozmet.ru/local/templates/rozmet/images/front-banner.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      id="home"
      className="hero relative h-[600px] bg-base-200"
    >
      <div className="hero-overlay bg-black bg-opacity-80 absolute inset-0"></div>

      <div className="hero-content text-center relative z-10">
        <div className="w-full flex items-center justify-center flex-col">
          {/* Логотип с анимацией появления */}
          <motion.img
            className="w-[200px] lg:hidden mb-10"
            src="logo.svg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />

          {/* Заголовок с анимацией появления */}
          <motion.h1
            className="lg:text-5xl text-3xl text-white/70 font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }} // Задержка анимации для заголовка
          >
            {polyglot.t('hero.title')}
          </motion.h1>

          {/* Описание с анимацией появления */}
          <motion.p
            className="py-6 text-white/80"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }} // Задержка анимации для описания
          >
            {polyglot.t('hero.description')}
          </motion.p>

          <WhatsAppButton />
        </div>
      </div>

      {/* Стрелка прокрутки */}
      <ScrollArrow className="bottom-5 absolute animate-bounce z-10" direction="down" targetId="services" />
    </div>
  );
}

export default HeroSection;
