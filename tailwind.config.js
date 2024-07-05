/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@my-company/tailwind-components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop-banner': "url('/img/desktop-banner.png')",
        'mobile-banner': "url('/img/mobile-banner.png')",
      },
      fontFamily: {
        archivo: ['"Archivo"'],
      }
    },
  },
  plugins: [],
}

