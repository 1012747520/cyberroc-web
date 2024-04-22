/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./public/index.html",
      "./src/**/*.{html,vue,js}"
  ],
  theme: {
    extend: {
      textDecoration: ['underline'],
    },
    container: {
      center: true,
      padding: '10px'
    },
    
  },
  plugins: [],
}

