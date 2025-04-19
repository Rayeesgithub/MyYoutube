/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      xs1: '320px', // 👈 custom breakpoint
      xs2:'375px',
      xs3:'425px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      
      xl: '1280px',
    },
  },
  plugins: [],
}