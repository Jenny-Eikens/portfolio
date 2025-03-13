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
        primary: '#F0F7F4',
        secondary: '#70ABAF',
        background: '#12213F',
        cards: '#162950',
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
