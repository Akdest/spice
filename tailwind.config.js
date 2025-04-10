/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./node_modules/flowbite/**/*.{js,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
    }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require("tw-elements/dist/plugin"),
    require('@tailwindcss/line-clamp'),
    require('flowbite/plugin'),
    require('tailwind-scrollbar-hide')
  ],
}
// tailwind.config.js
