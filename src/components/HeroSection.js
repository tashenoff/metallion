// src/components/HeroSection.js
import React, { useContext } from 'react';
import ScrollArrow from './ScrollArrow';
import WhatsAppButton from './WhatsAppButton';
import { TranslationContext } from '../TranslationContext';

function HeroSection() {
  const { polyglot } = useContext(TranslationContext);

  return (
    <div style={{
      backgroundImage: `url('https://rozmet.ru/local/templates/rozmet/images/front-banner.jpg')`,
      backgroundSize: 'cover', // Чтобы изображение покрывало весь блок
      backgroundPosition: 'center', // Чтобы изображение было выровнено по центру
      backgroundRepeat: 'no-repeat', // Чтобы изображение не повторялось
    }} id="home" className="hero relative h-[600px] bg-base-200">

      <div className="hero-overlay bg-black bg-opacity-80 absolute inset-0"></div>


      <div className="hero-content text-center relative z-10">
        <div className="w-full flex items-center justify-center flex-col">
        <img className='w-[200px] lg:hidden mb-10' src='logo.svg' />

          <h1 className="lg:text-5xl text-3xl text-white/70 font-bold">
            {polyglot.t('hero.title')}
          </h1>
          <p className="py-6 text-white/80">
            {polyglot.t('hero.description')}
          </p>
          <WhatsAppButton />
        </div>
      </div>

      {/* Стрелка прокрутки */}
      <ScrollArrow className="bottom-5 absolute animate-bounce z-10" direction="down" targetId="services" />
    </div>
  );
}

export default HeroSection;
