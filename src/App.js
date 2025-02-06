import './App.css';
import React, { useEffect } from 'react'; // Импортируем useEffect
import TagManager from 'react-gtm-module'; // Импортируем TagManager
import HeroSection from './components/HeroSection';
import AdvantagesSection from './components/AdvantagesSection';
import ServiceSection from './components/ServiceSection';
import ContactForm from './components/ContactForm';
import Layout from './components/Layout';
import 'typeface-montserrat';
// import FAQSection from './components/FAQSection';
import FloatingPhoneButton from './components/FloatingPhoneButton'; // Импортируем компонент
// import AboutSection from './components/AboutSection';
import OilSpecificationsTable from './components/OilSpecificationsTable';
import { TranslationProvider } from './TranslationContext';
function App() {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'AW-16765573978', // Замените на ваш идентификатор GTM
    };
    TagManager.initialize(tagManagerArgs);
  }, []); // Эффект будет выполнен только один раз при монтировании компонента

  return (
    <div className="App">
      <TranslationProvider>
        <Layout>
          <FloatingPhoneButton />
          <HeroSection />
          {/* <AboutSection /> */}
          <AdvantagesSection />
          {/* <OilSpecificationsTable /> */}
          <ServiceSection />
          {/* <FAQSection /> */}
          <ContactForm />
        </Layout>
      </TranslationProvider>
    </div>
  );
}

export default App;
