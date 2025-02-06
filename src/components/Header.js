// src/components/Header.js
import React, { useEffect } from 'react';
import Navbar from './Navbar';

function Header() {
    useEffect(() => {
        // Изменение мета-тега description
        const metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.content = "metallion"; // Установите нужное описание
        } else {
            const newMetaDescription = document.createElement('meta');
            newMetaDescription.name = 'description';
            newMetaDescription.content = 'metallion'; // Установите нужное описание
            document.head.appendChild(newMetaDescription);
        }

        // Изменение заголовка страницы
        document.title = "metallion"; // Установите нужный заголовок

        // Очистка эффекта при размонтировании компонента
        return () => {
            if (metaDescription) {
                metaDescription.content = "metallion"; // Восстановление исходного значения при необходимости
            }
        };
    }, []);

    return (
        <header>
            <Navbar />
        </header>
    );
}

export default Header;
