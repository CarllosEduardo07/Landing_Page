/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        fontFamily: {
            Roboto: ['Roboto', 'sans serif'],
            Poppins: ['Poppins', 'sans serif'],
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'primary-text': '#0f172a',
            'secondary-text': '#475569',
            'primary-color': '#8455ff',
            'secondary-color': '#5222d0',
          },
        extend: {},
    },
    plugins: [],
};
