// src/utils/confetti.js
import confetti from 'canvas-confetti';

export const triggerConfetti = (element) => {
    if (element) {
        const { top, left, width, height } = element.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        confetti({
            particleCount: 100,
            spread: 70,
            origin: {
                x: centerX / window.innerWidth,
                y: centerY / window.innerHeight,
            },
        });
    }
};