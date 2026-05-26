/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        walnut: '#5C3A21',
        cedar: '#A0522D',
        beige: '#E8DDCB',
        cream: '#FAF5EC',
        charcoal: '#2B2522',
        rust: '#8B4513',
      },
      fontFamily: {
        heading: ['Fraunces', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px rgba(92, 58, 33, 0.08)',
        warm: '0 6px 30px rgba(92, 58, 33, 0.15)',
      },
    },
  },
  plugins: [],
}
