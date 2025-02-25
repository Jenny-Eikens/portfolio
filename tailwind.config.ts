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
        primary: '#fefcfb',
        secondary: '#A30BC1',
      },
      backgroundImage: {
        desktop: "url('/images/bg-desktop.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config
