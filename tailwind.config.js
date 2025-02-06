/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // Добавьте шрифт Montserrat
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px', // Измените эти значения по своему усмотрению
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0000FF", // Синий
          secondary: "#FF0000", // Красный
          accent: "#37cdbe", // Дополнительный цвет (можно изменить при необходимости)
          neutral: "#3d4451", // Нейтральный цвет
          "base-100": "#ffffff", // Основной фон
        },
      },
    ],
  },
};
