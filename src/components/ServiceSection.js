import React, { useContext } from 'react'; // Добавлен useContext
import { TranslationContext } from '../TranslationContext';
import WhatsAppButton from './WhatsAppButton'; // Импортируем компонент WhatsAppButton

function ServiceSection() {
    const { polyglot } = useContext(TranslationContext);
    const services = [
        {
            name: "Арматура ",
            image: "https://rozmet.ru/upload/iblock/23f/6butdp71m6u7w3doeso30xyhzu91prfj.jpg", // Путь к изображению
            description: "Профессиональная заправка и восстановление черно-белых лазерных картриджей для принтеров различных марок."
        },
        {
            name: "Труба круглая",
            image: "https://rozmet.ru/upload/iblock/446/d2xdjlzrfbr88u1rytw6gxu035wapete.jpg",
            description: "в наличии все многообразие металлических водогазопроводных труб ВГП. "
        },
        {
            name: "Швеллер",
            image: "https://rozmet.ru/upload/iblock/bd1/3ay52m30ynbgh50dx01d9eqt85spc88u.jpg",
            description: "На выбор представлены равно- и не равнополочные изделия обычной, высокой и повышенной точности, а также мерной, немерной и кратной длины"
        },

        {
            name: "Труба профильная",
            image: "https://rozmet.ru/upload/iblock/a33/4w3m2biivrgji934vu04akz64zim45ke.jpg",
            description: "Профильная труба – это металлическое изделие особой формы, предназначенный для использования в различных строительных и инженерных проектах."
        },

        {
            name: "Листовой прокат",
            image: "https://rozmet.ru/upload/iblock/cd4/1ji1ockn2g3lvvwbxvqi5z1m3475uy3o.jpg",
            description: "большой выбор листового проката стали — вытяжного, горячекатаного, оцинкованного, рифленого и пр. Толщина изделий составляет 0,45–160 мм."
        },

        {
            name: "Уголок стальной",
            image: "https://rozmet.ru/img/ugolok-ravnopolochniy.jpg",
            description: "Уголок металлический очень похож на букву L. Поэтому его легко отличить от других изделий, которые широко применяются в строительной сфере. "
        },

    ];

    return (
        <div id="services" className="bg-white hero">


            <div className='py-10 '>
                <div className='container mx-auto'>
                    <h2 className="text-3xl font-bold text-center mb-6">  {polyglot.t('our_service')}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {services.map((service, index) => (
                            <div key={index} className="card bg-opacity-70 backdrop-blur-md bg-base-200 border-base-100 border shadow-md p-4">
                                <img
                                    src={service.image}
                                    alt={service.name}
                                    className="h-60 w-full object-cover mb-4 rounded-lg"
                                />
                                <h3 className="text-xl font-semibold">{service.name}</h3>
                                <p className="mt-2">{service.description}</p> {/* Описание услуги */}
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
