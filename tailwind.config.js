module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'headerbackground': "url('/public/TopBackground.png')"
      },
      fontFamily: {
        'nunito': ['Nunito'],
      },
    },
    plugins: [],
  }
}