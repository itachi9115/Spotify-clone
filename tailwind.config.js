/** @type {import('tailwindcss').Config} */
const baseFontSize = 10

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
   
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
     
        colors: {

         
         
          'black':{
            DEFAULT: '#000000',
            mid:'#191414',
            light:'#121212',
            dark:'#171212',
          }
        }, 
    },
    fontSize :{
      base: [
        `${(16 /2.56) / baseFontSize}rem`, /* 16px */
        
      ],
    },
  },
  plugins: [],
}

