/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
            'puti':'#ffffff',
            'maitim':'#2b2b2b',
            'lasalle':'#006341',
            'medyo':'#D0EAE4',
            'gento':'#006341',
            'maitimnagreen':'#013220',
            'semento':'hsl(240,1.51%,50.98%)',
            'BG':'#d4e9e2',
            'get':'#F1F8F5',
          },
          backgroundImage:{
            'star':"url('./img/rewards/star.png')"
          },
    },
  },
  plugins: [],
}

