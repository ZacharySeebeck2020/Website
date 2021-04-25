module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        offwhite: {
          DEFAULT: '#f6f6f6'
        },
        turquoise: {
          DEFAULT: '#c7ffd8'
        },
        lightblue: {
          DEFAULT: '#98ded9'
        },
        darkPurple: {
          DEFAULT: '#161d6f'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
