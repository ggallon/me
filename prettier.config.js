// prettier.config.js
module.exports = {
  semi: false,
  singleQuote: true,
  importOrder: ['^#/(.*)$'],
  plugins: [require('prettier-plugin-tailwindcss')],
}
