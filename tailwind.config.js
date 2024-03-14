/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      // Agrega tus colores personalizados aquí
      primary: '#1875BC',
      whiteColor: '#FFFFFF',
      terciary: '#F0C540',
      terciaryHover:'#EABA26',
      black:'#000000',
      grey:'#AAAAAA',
      colorText:'#545454',
      colorDanger:'#F06A40'
      // ...
    },
  },
  plugins: [],
}

