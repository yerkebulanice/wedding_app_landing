/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Manrope"', 'sans-serif']
      },
      colors: {
        ink: '#1f1a17',
        soft: '#f7f1ec'
      },
      boxShadow: {
        soft: '0 18px 50px rgba(15, 13, 12, 0.12)'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
