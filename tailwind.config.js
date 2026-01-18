/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        linkedin: {
          blue: '#0a66c2',
          background: '#f4f2ee',
          card: '#ffffff',
          text: '#191919',
          textSecondary: '#666666',
          border: '#e0e0e0',
        }
      },
      fontFamily: {
        linkedin: ['-apple-system', 'system-ui', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
