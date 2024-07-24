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
      },
      screens: {
        phone: "320px",
        // => @media (min-width: 320px) { ... }
        bigPhone: "500px",
        // => @media (min-width: 500px) { ... }
        tablet: "640px",
        // => @media (min-width: 640px) { ... }
  
        laptop: "960px",
        // => @media (min-width: 960px) { ... }
  
        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}

