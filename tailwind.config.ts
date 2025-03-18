import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(240, 247, 244, 1)',
        secondary: 'rgba(112, 171, 175, 1)',
        background: 'rgba(18, 33, 63, 1)',
        cards: 'rgba(22, 41, 80, 1)',
      },
      backgroundImage: {
        desktop: "url('/images/bg-desktop.jpg')",
        'gradient-heading':
          'linear-gradient(to right, #70ABAF, #99E1D9, #70ABAF)',
      },
    },
  },
  plugins: [],
} satisfies Config
