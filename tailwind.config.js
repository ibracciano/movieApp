/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      },
      backgroundImage: {
        'poster': "url('/src/assets/netflix.png",
        'movie': "url('/src/assets/bg.jpg')",
        'cinema': "url('/src/assets/cinema.jpg')",
        'reel': "url('/src/assets/reel.jpg')",
        'rat': "url('/src/assets/rat.jpg')",
        'img1': "url('/src/assets/img1.jpg",
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}