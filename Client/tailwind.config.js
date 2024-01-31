/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "auth-bg": "url('/images/bgauth.jpg')",
        "light-auth-bg": "url('/images/lightauthbg.jpg')",
      },
    },
  },
  plugins: [],
};