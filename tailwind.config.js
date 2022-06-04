module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'portfolio-blue-dark':'rgb(2, 2, 18)',
        'portfolio-blue-alpha-400':'rgba(3, 2, 26, 0.400)'
      },
      spacing:{
        'portfolio-30':'30rem',
        'portfolio-27':'27rem'
      }
    },
  },
  plugins: [],
}