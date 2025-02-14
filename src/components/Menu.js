// src/components/Menu.js
import React from 'react';

function Menu({ items, className }) {
    return (
        <ul className={`menu ${className}`}>
            {items.map((item, index) => (
                <li key={index}>
                    <a href={item.href}>{item.label}</a>
                </li>
            ))}
        </ul>
    );
}

export default Menu;