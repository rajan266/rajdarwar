/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          burgundy: '#351014',
          burgundyLight: '#4A181E',
          charcoal: '#171313',
          charcoalSoft: '#211B1B',
          gold: '#D4AF65',
          goldLight: '#E5C888',
          ivory: '#F8F1E6',
          beige: '#D8C9B2',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
