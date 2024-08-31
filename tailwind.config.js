/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'FeaturedMenuBG': "url('./src/assets/home/featured.jpg')",
        texture: "url('./src/assets/bgTextture.svg')"
      },
      colors: {
        'footerColor1' : '#1F2937',
        'footerColor2' : '#111827',
        'background.4' : 'rgba(0, 0, 0, 0.5)'
      }

    },
  },
  plugins: [
    require('daisyui'),

  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },

}