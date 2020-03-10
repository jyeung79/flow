const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ],
    theme: {
        screens: {
            'laptop': '1024px',
            'desktop': '1280px',
        }
    }
};

