/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        spotify: {
          green: '#1ed760',
          black: '#121212',
          surface: '#181818',
          mid: '#1f1f1f',
          card: '#252525',
          silver: '#b3b3b3',
          muted: '#7c7c7c',
          negative: '#f3727f',
          warning: '#ffa42b',
          info: '#539df5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'helvetica', 'arial', 'sans-serif'],
      },
      borderRadius: {
        pill: '500px',
        circle: '50%',
      },
      boxShadow: {
        heavy: 'rgba(0,0,0,0.5) 0px 8px 24px',
        med: 'rgba(0,0,0,0.3) 0px 8px 8px',
      },
      letterSpacing: {
        spotify: '1.4px',
      },
    },
  },
  plugins: [],
}

