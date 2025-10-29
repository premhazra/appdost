module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto']
      },
      colors: {
        brand: {
          50: '#eef2ff',
          500: '#6366f1'
        }
      }
    },
  },
  plugins: [],
}
