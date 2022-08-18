const defaultTheme = require('tailwindcss/defaultTheme')

const {
  themeConfig: { colors },
} = require('./tailwind.configs')

const sizes = ['minWidth', 'maxWidth', 'minHeight', 'maxHeight']

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.serif],
        ssp: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        auto: 'repeat(auto-fill, minmax(0, 1fr))',
      },
      ...sizes.reduce((acc, key) => {
        acc[key] = ({ theme }) => ({ ...theme('spacing') })
        return acc
      }, {}),
    },
    colors,
  },
  content: [
    './src/components/**/*.{js,vue,ts}',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './src/app.vue',
    // './nuxt.config.{js,ts}',
  ],
  plugins: [require('@tailwindcss/line-clamp')],
}
