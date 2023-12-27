/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./index.html",
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        './tailwind-theme.js',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#051441',
                secondary: '#2c2c51',
                tertiary: '#2b6f95',
                "font-gray": '#7b7b93',
                "btn-blue": '#2b6f96',
                "home-bg": '#1a1a3a',
                "btn-orange": '#ff6600',
                "pictogram-gray": '#f6f7fa',
                "slider-gray": '#f8f8f8',
                "slider-secondary-text": '#677294',
                "prices-color": '#051441',
            },
            fontFamily: {
                poppins: ['Poppins'],
            },
            fontSize: {
                h1: ['58px'],
                h2: ['40px'],
                h3: ['24px'],
                h4: ['20px'],
                h5: ['16px'],
                body: ['14px'],
                menu: ['18px']
            },
            boxShadow: {
                'all-around': '0px 2px 7px 0px rgb(12 0 46 / 0.1)'
            }
        }
    },
    plugins: ['~plugins/vue-gallery.client.js']
}
