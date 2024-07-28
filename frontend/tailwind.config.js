/** @type {import('tailwindcss').Config} */

const labelsClasses = [
  "indigo",
  "gray",
  "green",
  "blue",
  "red",
  "purple",
];

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'left-lg': '-10px 0 15px -3px rgba(0, 0, 0, 0.1), -10px 0 6px -2px rgba(0, 0, 0, 0.1)',
        'right-thin': '2px 0 4px -2px rgba(0, 0, 0, 0.3)',
      },
      height: {
        'full-110': 'calc(100% - 110px)',
        '20%': '20%',
        '80%': '80%',
      },
      width: {
        'full-50': 'calc(100% - 50px)',
        '20p': '20%',  
        '80p': '80%',  
      },
      fontSize: {
        'logo-size': ['30px', '50px'],
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sans: ["Open Sans"], // Eklediğiniz yeni font ailesi
      },
      gridTemplateColumns: {
        "1/5": "1fr 5fr",
      },
      colors: {
        tasDark: '#6d4a08',
        tasDarkSoft: '#855a0a',
        tasGold: '#f8e590',
      },
    },
  },
  safelist: [
    ...labelsClasses.map((lbl) => `bg-${lbl}-500`),
    ...labelsClasses.map((lbl) => `bg-${lbl}-200`),
    ...labelsClasses.map((lbl) => `text-${lbl}-400`),
  ],
  darkMode: false, // or 'media' or 'class'
  plugins: [
    require("@tailwindcss/forms"), // Eklediğiniz plugin
  ],
}
