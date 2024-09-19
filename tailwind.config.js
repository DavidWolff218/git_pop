/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'grey-line' : '#353A42',
        'link' : '#408AEA',
        'green-0' : '#151A22',
        'green-1' : '#0E4429',
        'green-2' : '#166D32',
        'green-3' : '#26A641',
        'green-4' : '#39D353',
      }
    },
  },
  plugins: [],
}

