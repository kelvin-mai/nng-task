/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    colors: {
      transparent: 'transparent',
      neutral: {
        0: '#000000',
        100: '#FFFFFF',
        80: '#CCCCCC',
      },
      primary: {
        20: '#4D0001',
        30: '#600C20',
        40: '#A61518',
        60: '#ED0000',
      },
      accent: {
        50: '#0073DD',
      },
    },
    fontFamily: {
      sans: ['Source Sans Pro', 'sans-serif'],
    },
    fontSize: {
      'title-lg': ['34px', { lineHeight: '48px' }],
      'title-sm': ['30px', { lineHeight: '38px' }],
      'heading-md': ['24px', { lineHeight: '32px' }],
      'heading-sm': ['20px', { lineHeight: '26px' }],
      body: ['18px', { lineHeight: '24px' }],
    },
    extend: {},
  },
  plugins: [],
};
