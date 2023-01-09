/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['Chivo Mono', 'ui-monospace', 'SFMono-Regular'],
    },
    extend: {
      colors: {
        'primary-darker': '#16161a',
        'primary-lighter': '#242629',
        'secondary-title': '#fffffe',
        'secondary-paragraph': '#94a1b2',
        card: '#242629',
        accent: '#7f5af0',
        'accent-darker': '#583EA8',
        tertiary: '#2cb67d',
      },
    },
  },
  plugins: [],
};
