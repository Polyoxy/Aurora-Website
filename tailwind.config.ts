import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        orange: {
          50: '#fff8f1',
          100: '#ffe8d5',
          200: '#ffd2ae',
          300: '#ffb37a',
          400: '#ff9247',
          500: '#f97316', // Primary orange
          600: '#e85d00',
          700: '#c24c02',
          800: '#9a3e09',
          900: '#7c360c',
          950: '#431a03',
        },
        black: '#000000',
        white: '#ffffff',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config; 