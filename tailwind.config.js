/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    screens:{
      'sm' : '320px',
      'md' : '792px',
      'xl' : '1280px',
    },
    colors: {
      transparent: 'transparent',
    current: 'currentColor',
      'Black' : '#27272A',
      'Greydark' : '#696969',
      'Greylight' : '#E5E7EB',
      'White' : '#FCFBFA',
      'Lavender' : '#7E3AF2',
      ALERTRED : '#E02424',
    },
    fontFamily: {
      mont :[ 'Montserrat'],
    extend: {
      backgroundImage: {
        'grad': "url('../grad.svg')",
        'Person': "url('/..Person.svg')",
        'Error': "url('/VERSTKAPOPITKAN1488/Error.svg')",
      },
      
    },
  },
  plugins: [],
}
}
