/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: 'var(--white)',
        'light-grey': 'var(--light-grey)',
        'light-blue': 'var(--light-blue)',
        'light-purple': 'var(--light-purple)',
        'soft-grey': 'var(--soft-grey)',
        'soft-purple': 'var(--soft-purple)',
        'soft-blue': 'var(--soft-blue)',
        'soft-medium-blue': 'var(--soft-medium-blue)',
        'soft-light-blue': 'var(--soft-light-blue)',
        'soft-blue-light': 'var(--soft-blue-light)',
        'medium-grey': 'var(--medium-grey)',
        'medium-blue': 'var(--medium-blue)',
        'medium-purple': 'var(--medium-purple)',
        grey: 'var(--grey)',
        blue: 'var(--blue)',
        purple: 'var(--purple)',
        'dark-grey': 'var(--dark-grey)',
        'dark-blue': 'var(--dark-blue)',
        'dark-purple': 'var(--dark-purple)',
        lilac: 'var(--lilac)',
      },
      backgroundImage: {
        'ameba-pattern': "url('/ameba-bg.jpg')",
        'ameba-pattern-light': "url('/ameba-bg-light.png')",
      },
    },
  },
  plugins: [],
};
