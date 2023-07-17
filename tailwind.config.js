/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '5px': '5px',
        'body': '100px',
      },
      transitionDuration: {
        '2000': '2000ms',
      }
    },

    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      normal: '0',
      wider: '.05em',
      widest: '.25em',
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: "#148dff",
      secondary: "#e4cd00",
      tertiary: "#339b4a",
      "black-100": "#100d25",
      "black-200": "#090325",
      "white-100": "#f3f3f3",
      'white': '#ffffff',
      'second': '#18181b',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'yellow': '#eab308',
      'blue': '#4FD1C5',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'green': " #19dd33",
      'gray': "#ddd"
    },

    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      'extra-bold': '800',
      black: '900',
      second: '900',
    },

    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      'xl': '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      'part': '18px',
      'first': '18px',
      'second': '60px',
    },
    boxShadow: {
      card: "0px 35px 120px -15px #211e35",
    },

  },
  plugins: [],
}

