/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      colors: {
        border_header:'#212121',
        text_header:'#5F5F5F',
        text_header2:'#D8D8D8',
        bg_header_buttom: '#696868',
        bg_black:'#000000',
        bg_sidebar_table: '#151515',
        bg_table: '#212121',
        text_footer_sidebar:'#939090',
        hr : '#212121',
      }
    }
  },
    
  plugins: [],
}

