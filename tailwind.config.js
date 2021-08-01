module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        header: '48px',
        main: 'calc(100% - 48px)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
