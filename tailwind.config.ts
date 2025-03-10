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
        secondary: '#580cc1',
        background: '#04042c',
        skills: '#1a1a46',
      },
      backgroundImage: {
        desktop: "url('/images/bg-desktop.jpg')",
        'gradient-heading':
          'linear-gradient(to right, #1c0bbe, #580cc1, #1c0bbe)',
      },
    },
  },
  plugins: [],
} satisfies Config
