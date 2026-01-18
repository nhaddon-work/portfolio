/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: 'var(--background)',
        text: 'var(--foreground)',
        muted: 'var(--muted)',

        lavender: 'var(--lavender)',
        peach: 'var(--peach)',
        mint: 'var(--mint)',
        sky: 'var(--sky)',
        butter: 'var(--butter)',
      },
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
