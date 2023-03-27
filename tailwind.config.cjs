/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/**/**/*.{js,ts,jsx,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans'],
      },
    },
    screens: {
      xxs: '375px',
      xs: '475px',
      ...defaultTheme.screens,
    },
    colors: {
      // primary colors
      'primary-000': '#ffffff',
      'primary-100': '#d6e4fd',
      'primary-200': '#aec8fc',
      'primary-300': '#85a8f8',
      'primary-400': '#658df1',
      'primary-500': '#3563e9',
      'primary-600': '#264bc8',
      'primary-700': '#1a37a7',
      'primary-800': '#102587',
      'primary-900': '#0a196f',
      // secondary colors
      'secondary-100': '#e0e9f4',
      'secondary-200': '#c3d4e9',
      'secondary-300': '#90a3bf',
      'secondary-400': '#596780',
      'secondary-500': '#1a202c',
      'secondary-600': '#131825',
      'secondary-700': '#0d121f',
      'secondary-800': '#080c19',
      'secondary-900': '#040815',
      // success colors
      'success-100': '#f5fcd2',
      'success-200': '#e8faa6',
      'success-300': '#d3f178',
      'success-400': '#bce455',
      'success-500': '#9cd323',
      'success-600': '#7fb519',
      'success-700': '#659711',
      'success-800': '#4c7a0b',
      'success-900': '#3b6506',
      // error colors
      'error-100': '#ffe7d3',
      'error-200': '#ffc8a6',
      'error-300': '#ffa37a',
      'error-400': '#ff7f59',
      'error-500': '#ff4423',
      'error-600': '#db2719',
      'error-700': '#b71112',
      'error-800': '#930b16',
      'error-900': '#7a0619',
      // warning colors
      'warning-100': '#fff8d7',
      'warning-200': '#ffefb0',
      'warning-300': '#ffe488',
      'warning-400': '#ffd96b',
      'warning-500': '#ffc73a',
      'warning-600': '#dba32a',
      'warning-700': '#b7821d',
      'warning-800': '#936312',
      'warning-900': '#7a4d0b',
      // information colors
      'info-100': '#dcf3ff',
      'info-200': '#bae5ff',
      'info-300': '#98d3ff',
      'info-400': '#7ec2ff',
      'info-500': '#54a6ff',
      'info-600': '#3d81db',
      'info-700': '#2a60b7',
      'info-800': '#1a4393',
      'info-900': '#102e7a',
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
};
