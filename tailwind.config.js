/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fintech: {
          bg: '#0B0F17',
          card: '#131B2A',
          cardHover: '#1C273D',
          border: '#1E293B',
          accent: '#06B6D4', // cyan-500
          teal: '#14B8A6',   // teal-500
          emerald: '#10B981',// emerald-500
          textMuted: '#94A3B8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
