// src/components/ScrollArrow.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

function ScrollArrow({ direction = 'down', targetId, className }) {
    const handleClick = () => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`${className} p-2 text-white hover:bg-primary-focus transition-all duration-300`}
            aria-label={`Scroll ${direction}`}
        >
            <FontAwesomeIcon icon={direction === 'down' ? faArrowDown : faArrowUp} size="lg" />
        </button>
    );
}

export default ScrollArrow;
