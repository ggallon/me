const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          `var(--font-inter), ${fontFamily.sans.join(', ')}`,
          { fontFeatureSettings: '"cv05", "cv06"' },
        ],
      },
      fontSize: {
        xxs: [
          '0.625rem',
          {
            lineHeight: '0.875rem',
            letterSpacing: '0.010em',
          },
        ],
        xs: [
          '0.75rem',
          {
            lineHeight: '1.050rem',
            letterSpacing: '0em',
          },
        ],
        sm: [
          '0.875rem',
          {
            lineHeight: '1.225rem',
            letterSpacing: '-0.006em',
          },
        ],
        base: [
          '1rem',
          {
            lineHeight: '1.4rem',
            letterSpacing: '-0.011em',
          },
        ],
        lg: [
          '1.125rem',
          {
            lineHeight: '1.575rem',
            letterSpacing: '-0.014em',
          },
        ],
        xl: [
          '1.5rem',
          {
            lineHeight: '2rem',
            letterSpacing: '-0.01em',
          },
        ],
        '2xl': [
          '1.25rem',
          {
            lineHeight: '1.75rem',
            letterSpacing: '-0.017em',
          },
        ],
        '3xl': [
          '1.875rem',
          {
            lineHeight: '2.625rem',
            letterSpacing: '-0.021em',
          },
        ],
        '4xl': [
          '2.25rem',
          {
            lineHeight: '3.15rem',
            letterSpacing: '-0.022em',
          },
        ],
        '5xl': [
          '3rem',
          {
            lineHeight: '4.2rem',
            letterSpacing: '-0.02em',
          },
        ],
        '6xl': [
          '3.75rem',
          {
            lineHeight: '5.25rem',
            letterSpacing: '-0.02em',
          },
        ],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
