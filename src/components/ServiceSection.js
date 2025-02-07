import React, { useContext } from 'react';
import { TranslationContext } from '../TranslationContext';
import WhatsAppButton from './WhatsAppButton';

const translations = {
  ru: {
    title: 'Наши услуги',
    services: [
      {
        name: 'Труба бесшовная',
        image: 'https://images.satu.kz/228079628_w640_h640_truba-besshovnaya.jpg',
        description: 'Наши трубы обладают высокой прочностью, устойчивы к коррозии и рассчитаны на длительный срок эксплуатации.',
      },
      {
        name: 'Арматура',
        image: 'https://rozmet.ru/upload/iblock/23f/6butdp71m6u7w3doeso30xyhzu91prfj.jpg',
        description: 'Прочный и надежный материал, используемый в строительстве для укрепления железобетонных конструкций.',
      },
      {
        name: 'Труба круглая',
        image: 'https://rozmet.ru/upload/iblock/446/d2xdjlzrfbr88u1rytw6gxu035wapete.jpg',
        description: 'В наличии все многообразие металлических водогазопроводных труб ВГП.',
      },
      {
        name: 'Швеллер',
        image: 'https://rozmet.ru/upload/iblock/bd1/3ay52m30ynbgh50dx01d9eqt85spc88u.jpg',
        description: 'Представлены изделия разной точности и длины для строительных и промышленных нужд.',
      },
      {
        name: 'Труба профильная',
        image: 'https://rozmet.ru/upload/iblock/a33/4w3m2biivrgji934vu04akz64zim45ke.jpg',
        description: 'Применяется в строительстве, машиностроении и других инженерных сферах.',
      },
      {
        name: 'Листовой прокат',
        image: 'https://rozmet.ru/upload/iblock/cd4/1ji1ockn2g3lvvwbxvqi5z1m3475uy3o.jpg',
        description: 'Широкий выбор металлических листов различной толщины и назначения.',
      },
      {
        name: 'Уголок стальной',
        image: 'https://rozmet.ru/img/ugolok-ravnopolochniy.jpg',
        description: 'Прочный и универсальный материал, применяемый в строительстве и машиностроении.',
      },
    ],
  },
  en: {
    title: 'Біздің қызметтеріміз',
    services: [
      {
        name: 'Жіксіз құбыр',
        image: 'https://images.satu.kz/228079628_w640_h640_truba-besshovnaya.jpg',
        description: 'Біздің құбырларымыз жоғары беріктігімен, коррозияға төзімділігімен және ұзақ мерзімді қызметімен ерекшеленеді.',
      },
      {
        name: 'Арматура',
        image: 'https://rozmet.ru/upload/iblock/23f/6butdp71m6u7w3doeso30xyhzu91prfj.jpg',
        description: 'Темірбетон конструкцияларын нығайту үшін құрылыс саласында қолданылатын берік және сенімді материал.',
      },
      {
        name: 'Дөңгелек құбыр',
        image: 'https://rozmet.ru/upload/iblock/446/d2xdjlzrfbr88u1rytw6gxu035wapete.jpg',
        description: 'Металл су-газ құбырларының барлық түрлері қолжетімді.',
      },
      {
        name: 'Швеллер',
        image: 'https://rozmet.ru/upload/iblock/bd1/3ay52m30ynbgh50dx01d9eqt85spc88u.jpg',
        description: 'Құрылыс және өнеркәсіптік қажеттіліктер үшін әртүрлі дәлдіктегі және ұзындықтағы бұйымдар ұсынылған.',
      },
      {
        name: 'Профильді құбыр',
        image: 'https://rozmet.ru/upload/iblock/a33/4w3m2biivrgji934vu04akz64zim45ke.jpg',
        description: 'Құрылыс, машина жасау және басқа инженерлік салаларда қолданылады.',
      },
      {
        name: 'Металл прокаты',
        image: 'https://rozmet.ru/upload/iblock/cd4/1ji1ockn2g3lvvwbxvqi5z1m3475uy3o.jpg',
        description: 'Қалыңдығы мен мақсаты әртүрлі металл парақтарының кең таңдауы.',
      },
      {
        name: 'Металл бұрышы',
        image: 'https://rozmet.ru/img/ugolok-ravnopolochniy.jpg',
        description: 'Құрылыс және машина жасау саласында қолданылатын берік және әмбебап материал.',
      },
    ],
  },

};

function ServiceSection() {
  const { language } = useContext(TranslationContext);
  const { title, services } = translations[language] || translations.ru;

  return (
    <div id="services" className="bg-white hero">
      <div className="py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl text-gray-700 font-bold text-left mb-6">{title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div key={index} className="card bg-opacity-70 backdrop-blur-md bg-base-200 border-base-100 border shadow-md p-4">
                <img src={service.image} alt={service.name} className="h-60 w-full object-cover mb-4 rounded-lg" />
                <h3 className="text-xl font-semibold">{service.name}</h3>
                <p className="mt-2">{service.description}</p>
                <WhatsAppButton />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
