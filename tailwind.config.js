const withMT = require('@material-tailwind/html/utils/withMT');

module.exports = withMT({
  content: ['./src/**/*.{html,js}', './*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      colors: {
        primary: '#4A46FB',
        secondary: '#FDDE55',
        textColor: '#444',
      },
    },
  },
  plugins: [],
});
