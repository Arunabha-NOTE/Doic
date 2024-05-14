/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            colors: {
                "primary": "",
                "manipal-orange":"#f37022",
                "mit-orange": "#dd6522",
                "mit-grey": "#222529",
                "mit-yellow": "#f5ca35",
                "mit-nav-white" : "#e9ecef",
                "mit-body-white" : "#f8f9fa"
            }
        },
    },
    plugins: [],
}