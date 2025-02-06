// src/TranslationContext.js
import React, { createContext, useState, useEffect } from 'react';
import Polyglot from 'node-polyglot';

// Переводы
const translations = {
    en: {
        services: "Қызметтер",
        our_service: "Біздің қызметтеріміз",
        contacts_menu: "Байланыс",
        advantages_menu:"Артықшылықтар",
        advantages: {
            title: 'Бізбен жұмыс істеудің артықшылықтары',
            description: 'Әрбір клиентке біз өзара пайдалы ынтымақтастық шарттарын қамтамасыз етеміз. Біз өз тапсырысшыларымызды бағалаймыз, сондықтан зауыт қоймаларына ақаулы немесе төмен сапалы металл ешқашан жеткізілмейді. Бізбен жұмыс істеу — сенімді, тиімді және қауіпсіз!',
            quality: "Жоғары сапа.",
            qualityDescription: "Өнімнің екі деңгейлі жүйелі сапа бақылауы",
            partnership: "Long-term partnership",
            partnershipDescription: "LLP 'AIVA.KZ' is interested in the long-term supply of vegetable oils to China.",
            logistics: "Икемді логистика.",
            logisticsDescription: "Материалдарды тікелей нысанға қысқа мерзімде жеткізуге кепілдік беретін жеке жеткізу қызметі.",
            documentation: "Құжаттарды қолдау.",
            documentationDescription: "Толық құжаттар пакетін, көлік құжаттарын, сертификаттарды және т.б. ұсынамыз.",
            privateLabel: "Private Label",
            privateLabelDescription: "Possibility of supplying products under the customer's brand – 'Private label'.",
            team: "Кәсіби команда.",
            teamDescription: "Көп жылдық тәжірибесі бар мамандарымыз қызметтің жоғары сапасын және әр кезеңде қолдауды қамтамасыз етеді.",
        },
        contact: {
            title: 'Іздегеніңізді таппадыңыз ба?',
            subtitle:'Бізбен байланысып, сапалы кеңес алыңыз'
        },
        sendwp: "WhatsApp-қа жазу",
        hero: {
            title: 'Астанадағы металл прокат',
            description: 'Болат листтер, металл трубалар сатып алу, металл прокат жеткізу',
        },
        companyName: 'Company Name',
        address: 'Address',
        bin: 'BIN',
        bankDetails: 'Bank Details',
        currency: 'Currency',
    },
    ru: {
        services: "Услуги",
        advantages_menu: "Преимущества",
        contacts_menu: "Контакты",
        our_service: "Наши услуги",
        advantages: {
            title: 'Преимущества работы с нами',
            description: 'Каждому клиенту мы гарантируем взаимовыгодные условия сотрудничества. Мы дорожим своими заказчиками, поэтому брак и низкокачественный металл никогда не поступают на склады предприятия. С нами — надежно, выгодно и безопасно!',
            quality: "Высокое качество",
            qualityDescription: "Двухуровневый систематический контроль качества продукции",
            logistics: "Гибкая логистика",
            logisticsDescription: "Собственная служба доставки, гарантирующая вам поставку материалов непосредственно на объект в кратчайшие сроки",
            documentation: "Документальное сопровождение",
            documentationDescription: "Предоставляем полный пакет документов, транспортные документы, сертификаты и т.д.",
            team: "Профессиональная команда",
            teamDescription: "Наши специалисты с многолетним опытом обеспечивают высокое качество сервиса и поддержку на каждом этапе работы.",
        },
        contact: {
            title: 'Не нашли то что искали?',
            subtitle: 'Свяжитесь с нами и получите качественную консультацию'
        },
        sendwp: "связаться в WhatsApp",
        hero: {
            title: 'Металлопрокат в Астане',
            description: 'Купить листовой металл и металлические трубы, поставки металлопроката',
        },
        companyName: 'Название компании',
        address: 'Адрес',
        bin: 'БИН',
        bankDetails: 'Банковские реквизиты',
        currency: 'Валюта',
    },
};


export const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const [polyglot, setPolyglot] = useState(new Polyglot({ phrases: translations['en'] }));

    useEffect(() => {
        setPolyglot(new Polyglot({ phrases: translations[language] }));
    }, [language]);

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
    };

    return (
        <TranslationContext.Provider value={{ polyglot, language, handleLanguageChange }}>
            {children}
        </TranslationContext.Provider>
    );
};
