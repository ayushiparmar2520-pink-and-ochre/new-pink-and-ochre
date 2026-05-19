/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#fefdfb',
        'ivory': '#f9f7f4',
        'taupe': '#b8a99f',
        'sage': '#9ba89c',
        'charcoal': '#3d3d3d',
        'blush': '#e8d5d0',
        'warm-stone': '#dcc4ba',
        'gold': '#c4a96a',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Lora', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'wide': '0.15em',
        'wider': '0.25em',
      },
      lineHeight: {
        'relaxed': '1.75',
        'loose': '2',
      },
      spacing: {
        'safe': 'max(1rem, env(safe-area-inset-left))',
      },
      borderRadius: {
        'sm': '2px',
        'md': '4px',
        'lg': '8px',
      },
    },
  },
  plugins: [],
}
