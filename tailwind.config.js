/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ini memastikan Tailwind memproses semua file di dalam folder `src`
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

