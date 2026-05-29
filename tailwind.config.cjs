/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#111111',
        border: '#1f1f1f',
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        },
        blue: {
          400: '#60a5fa',
          500: '#3b82f6',
        },
        text: '#f5f5f5',
        muted: '#666666',
      },
      fontFamily: {
        sans: ['Arimo', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}