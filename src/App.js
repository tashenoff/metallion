import './App.css';
import React, { useEffect } from 'react'; // Импортируем useEffect
import TagManager from 'react-gtm-module'; // Импортируем TagManager
import HeroSection from './components/HeroSection';
import AdvantagesSection from './components/AdvantagesSection';
import ServiceSection from './components/ServiceSection';
import ContactForm from './components/ContactForm';
import Layout from './components/Layout';
import 'typeface-montserrat';
import FloatingPhoneButton from './components/FloatingPhoneButton'; // Импортируем компонент
import { TranslationProvider } from './TranslationContext';

function App() {
  useEffect(() => {
    // Инициализация GTM
    const tagManagerArgs = {
      gtmId: '', // Замените на ваш идентификатор GTM
    };
    TagManager.initialize(tagManagerArgs);
    
    // Изменение заголовка страницы
    document.title = "metallion.kz"; // Замените на нужный заголовок

  }, []); // Эффект будет выполнен только один раз при монтировании компонента

  return (
    <div className="App">
      <TranslationProvider>
        <Layout>
          <FloatingPhoneButton />
          <HeroSection />
          <AdvantagesSection />
          <ServiceSection />
          <ContactForm />
        </Layout>
      </TranslationProvider>
    </div>
  );
}

export default App;
