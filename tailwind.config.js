/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    content: ['index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            sm: '600px',
            md: '768px',
            lg: '1260px',
        },
        fontSize: {
            ...defaultTheme.fontSize,
            '4xl': '40px',
        },
        extend: {
            colors: {
                rose: {
                    900: '#260F08',
                    500: '#87635A',
                    400: '#AD8A85',
                    300: '#CAAFA7',
                    100: '#F5EEEC',
                    50: '#FCF8F6',
                },
                red: '#C73B0F',
                'dark-red': '#952c0b',
                green: '#1EA575',
            },
            fontFamily: {
                sans: ['Red Hat Text', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
