module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      width: {
        65: '17rem'
      },
      colors: {
        primary: {
          100: '#f5f8d7',
          200: '#e7f1ae',
          300: '#d8eb84',
          400: '#cae35a',
          500: '#b0c43a',
          600: '#8f9f2e',
          700: '#6d7a23',
          800: '#4b5518',
          900: '#2a300d'
        },
        dark: '#000',
        side: '#08090a'
      }
    }
  },
  plugins: []
}
