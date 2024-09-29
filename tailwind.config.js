/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    content: ['index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
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
                green: '#1EA575',
            },
            fontFamily: {
                sans: ['Red Hat Text', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
