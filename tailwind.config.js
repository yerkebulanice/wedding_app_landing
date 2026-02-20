/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        milk: '#fcfbf9',
        brand: {
          50: '#f5edff',
          100: '#ead9ff',
          200: '#d9bcff',
          300: '#c194ff',
          400: '#a96cff',
          500: '#8f48f2',
          600: '#7e36de'
        }
      },
      borderRadius: {
        xl2: '1rem'
      },
      boxShadow: {
        soft: '0 14px 30px rgba(15, 23, 42, 0.1)'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
