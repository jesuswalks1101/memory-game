module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        'negative': '-10',
       }
    },
    screens : {
      'xs': {'min': '400px', 'max': '624px'},
      sm: '625px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
// #96d0b7
