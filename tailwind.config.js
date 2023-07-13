/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bgColor-Navbar': '#363636',
        'borderColor-Posts': '#0017ff',
        'bgColor-Card': '#edf3f4',
      },
      backgroundImage: {
        'gradient-conic':
          'conic-gradient( from 0.5turn, #fb9202, #ff4500 0.5turn,#fb9202)',
      },
      fontFamily: {
        RedexPro: ['Readex'],
      },
    },
  },
  plugins: [],
};
