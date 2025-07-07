/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        primary: '#F2F4F8',  
        secondary: '#1D4C9E',
        warning: '#EF4A23',
        warningDark: '#D51E0B',
        info: '#DFE7F6',
        hoverInfo: '#3749bb',
        dashInfo: '#F5F5F5'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

