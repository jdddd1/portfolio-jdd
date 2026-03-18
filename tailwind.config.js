/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f4f7f5',
          100: '#e4ebe6',
          200: '#cbdad1',
          300: '#a3bfb2',
          400: '#769e8d',
          500: '#5a8272',
          600: '#46685a',
          700: '#3a544a',
          800: '#31443d',
          900: '#2a3a34',
        },
      },
    },
  },
  plugins: [],
}
