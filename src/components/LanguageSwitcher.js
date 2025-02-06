// src/components/LanguageSwitcher.js
import React, { useContext } from 'react';
import { TranslationContext } from '../TranslationContext';

function LanguageSwitcher() {
  const { language, handleLanguageChange } = useContext(TranslationContext);

  return (
    <div className="language-switcher flex space-x-2 ml-5">
      {/* Кнопка для английского языка */}
      <button
        className={`flag-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('en')}
      >
        <img
          src="https://flagcdn.com/w40/kz.png"
          alt="Kazaq"
          className="w-5 h-5 rounded"
        />
      </button>

      {/* Кнопка для русского языка */}
      <button
        className={`flag-btn ${language === 'ru' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('ru')}
      >
        <img
          src="https://flagcdn.com/w40/ru.png"
          alt="Русский"
          className="w-5 h-5 rounded"
        />
      </button>
    </div>
  );
}

export default LanguageSwitcher;
