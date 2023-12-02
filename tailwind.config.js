/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*{.js,.jsx}',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundImage:{
        'cats': 'url("https://res.cloudinary.com/mindset/image/upload/v1701524709/Onboard_Screen_tgcf5m.png")'
      },
      colors: {
        'black': '#1C1C1C',
        'purple': '#924FFF',
        grey: '#757575',
        white: '#F5F5F5',
      },
      fontFamily: {
        'DMsans': ["var(--font-DMSans)"],
      }
    },
  },
  plugins: [],
}
