/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'lady': "url(./Assets/Homepage-assets/lady.png)",
        'ladyDesktop': "url(./Assets/Homepage-assets/lady-desktop.png)",
        'Egypt': "url(./Assets/Homepage-assets/egypt.png)",
        'EgyptDesktop': "url(./Assets/Homepage-assets/egypt-desktop.png)",
        'Pharoah-Mobile': "url(./Assets/Homepage-assets/pharoah-mobile.png)",
        'Pharoah-Desktop': "url(./Assets/Homepage-assets/pharoah-desktop.png)",
        'gallery':"url(./Assets/Homepage-assets/gallery.png)",
      }
    },
  },
  plugins: [],
};
