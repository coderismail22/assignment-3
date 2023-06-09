/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('daisyui'),
    // ...other plugins
  ],
  purge: [
    './src/**/*.{html,js}',
    './node_modules/daisyui/**/*.{html,js}', // Add this line for DaisiUI
  ],
}

