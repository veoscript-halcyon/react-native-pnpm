// const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    extend: {
      colors: {
        'accent-1': '#F1DEC9',
        'accent-2': '#C8B6A6',
        'accent-3': '#A4907C',
        'accent-4': '#8D7B68',
      },
      fontFamily: {
        "raleway": ['Raleway-Regular'],
        "raleway-light": ["Raleway-Light"],
        "raleway-bold": ["Raleway-Bold"],
        "raleway-black": ["Raleway-Black"]
      },
    },
  },
  // plugins: [
  //   plugin(({ addUtilities }) => {
  //     addUtilities({
  //       "backgroundImage": {
  //         backgroundImage: 'Poppins-Regular',
  //       },
  //     });
  //   }),
  // ],
};
