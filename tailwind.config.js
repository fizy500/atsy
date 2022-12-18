/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'lady': "url(./Pages/Homepage-assets/lady.png)",
        'ladyDesktop': "url(./Pages/Homepage-assets/lady-desktop.png)",
        'Egypt': "url(./Pages/Homepage-assets/egypt.png)",
        'EgyptDesktop': "url(./Pages/Homepage-assets/egypt-desktop.png)",
        'Pharoah-Mobile': "url(./Pages/Homepage-assets/pharoah-mobile.png)",
        'Pharoah-Desktop': "url(./Pages/Homepage-assets/pharoah-desktop.png)",
        'gallery':"url(./Pages/Homepage-assets/gallery.png)",
      }
    },
  },
  plugins: [],
};
