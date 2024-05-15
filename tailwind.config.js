module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['sans-serif'],
        'roboto': ['Roboto'],
        'poppins': ['Poppins'],
        'alfa': ['Alfa Slab One'],
        'lilita': ['Passion One']
      },
      colors: {
        orange: {
          '50': '#fff7ed',
          '100': '#ffedd5',
          '200': '#fed7aa',
          '300': '#fdba74',
          '400': '#fb923c',
          '500': '#f97316',
          '600': '#ea580c',
          '700': '#c2410c',
          '800': '#9a3412',
          '900': '#7c2d12',
        },
      },
      boxShadow: {
        'custom': 'drop-shadow(-5px -7px 19px #000000)',
        'inset-custom': 'inset -5px -7px 19px #000000'
       
      },
      width: {
        '144': '144px',
        '750': '750px'
      },
      height: {
        '179': '179px',
        '120': '120px'
      }
      
    },
  },
  plugins: [],
}
