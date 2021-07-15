// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  colors: {
    iquest_blue: {
      DEFAULT: '#1fb6ff',
    },
    iquest_purple: {
      DEFAULT: '#ff49db',
    },
    iquest_blue: {
      darkest: '#1f2d3d',
      dark: '#3c4858',
      DEFAULT: '#c0ccda',
      light: '#e0e6ed',
      lightest: '#f9fafc',
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
}
