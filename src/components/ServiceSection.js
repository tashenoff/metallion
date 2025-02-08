import React, { useContext } from 'react';
import { TranslationContext } from '../TranslationContext';
import ServiceItem from "./ServiceItem";

const imageBasePath = "/images/product"; // Путь к папке с картинками

// Объект с картинками
const images = {
    'truba-besshovnaya': `${imageBasePath}/truba-beshovnaya.webp`,
    'armatura': `${imageBasePath}/armatura.jpg`,
    'truba-kruglaya': `${imageBasePath}/truba-kruglaya.jpg`,
    'wveler': `${imageBasePath}/wveler.jpg`,
    'truba-profilnaya': `${imageBasePath}/truba-profilnaya.jpg`,
    'ugolok-stlnaoi': `${imageBasePath}/ugolok-stlnaoi.jpg`,
    'list-prokat': `${imageBasePath}/list-prokat.webp`,
};

// Данные о сервисах без дублирования изображений
const servicesData = [
    {
        key: 'truba-besshovnaya',
        translations: {
            ru: { name: 'Труба бесшовная', description: 'Наши трубы обладают высокой прочностью, устойчивы к коррозии и рассчитаны на длительный срок эксплуатации.' },
            en: { name: 'Жіксіз құбыр', description: 'Біздің құбырларымыз жоғары беріктігімен, коррозияға төзімділігімен және ұзақ мерзімді қызметімен ерекшеленеді.' },
        }
    },
    {
        key: 'armatura',
        translations: {
            ru: { name: 'Арматура', description: 'Прочный и надежный материал, используемый в строительстве для укрепления железобетонных конструкций.' },
            en: { name: 'Арматура', description: 'Темірбетон конструкцияларын нығайту үшін құрылыс саласында қолданылатын берік және сенімді материал.' },
        }
    },
    {
        key: 'truba-kruglaya',
        translations: {
            ru: { name: 'Труба круглая', description: 'В наличии все многообразие металлических водогазопроводных труб ВГП.' },
            en: { name: 'Дөңгелек құбыр', description: 'Металл су-газ құбырларының барлық түрлері қолжетімді.' },
        }
    },
    {
        key: 'wveler',
        translations: {
            ru: { name: 'Швеллер', description: 'Представлены изделия разной точности и длины для строительных и промышленных нужд.' },
            en: { name: 'Швеллер', description: 'Құрылыс және өнеркәсіптік қажеттіліктер үшін әртүрлі дәлдіктегі және ұзындықтағы бұйымдар ұсынылған.' },
        }
    },
    {
        key: 'truba-profilnaya',
        translations: {
            ru: { name: 'Труба профильная', description: 'Применяется в строительстве, машиностроении и других инженерных сферах.' },
            en: { name: 'Профильді құбыр', description: 'Құрылыс, машина жасау және басқа инженерлік салаларда қолданылады.' },
        }
    },
    {
        key: 'list-prokat',
        translations: {
            ru: { name: 'Листовой прокат', description: 'Широкий выбор металлических листов различной толщины и назначения.' },
            en: { name: 'Металл прокаты', description: 'Қалыңдығы мен мақсаты әртүрлі металл парақтарының кең таңдауы.' },
        }
    },
    {
        key: 'ugolok-stlnaoi',
        translations: {
            ru: { name: 'Уголок стальной', description: 'Прочный и универсальный материал, применяемый в строительстве и машиностроении.' },
            en: { name: 'Металл бұрышы', description: 'Құрылыс және машина жасау саласында қолданылатын берік және әмбебап материал.' },
        }
    },
];

function ServiceSection() {
    const { language } = useContext(TranslationContext);

    return (
        <div id="services" className="bg-white hero">
            <div className="py-10">
                <div className="container mx-auto">
                    <h2 className="text-3xl text-gray-700 font-bold text-left mb-6">
                        {language === 'kz' ? 'Біздің каталог' : 'Каталог'}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {servicesData.map(({ key, translations }) => (
                            <ServiceItem
                                key={key}
                                image={images[key]} // Подставляем изображение по ключу
                                name={translations[language]?.name || translations.ru.name}
                                description={translations[language]?.description || translations.ru.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceSection;
