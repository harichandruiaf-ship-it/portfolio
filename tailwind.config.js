/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0C0C0C',
        'dark-secondary': '#1a1a1a',
        muted: '#9a9a9a',
        accent: '#6366f1',
      },
      fontFamily: {
        'kanit': ["'Kanit'", 'sans-serif'],
        'instrument': ["'Instrument Serif'", 'serif'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(180deg, #646973 0%, #BBCCD7 100%)',
      },
    },
  },
  plugins: [],
}
