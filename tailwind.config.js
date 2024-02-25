/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#2ecc71',
        'secondary': '#3498db',
        'light': '#ecf0f1',
        'dark': '#2c3e50',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
    }
  },
  plugins: [],
}

