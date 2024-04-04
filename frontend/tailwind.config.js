/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/components/**/*.{html,js}',
    "./src/**/*.{js,jsx,ts,tsx}"
  ],

  theme: {
    extend: {
      colors: {
        primary: '#840000',
      }
    },
  },
  plugins: [],
}

