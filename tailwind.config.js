module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    mode: 'all',
    preserveHtmlElements: false,
    content: [
      './components/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}'
    ],
    options: {
      keyframes: true,
    },
  },
  theme: {},
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ],
}
