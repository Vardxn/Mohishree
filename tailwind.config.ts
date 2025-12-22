import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066CC',
          50: '#E6F2FF',
          100: '#CCE5FF',
          200: '#99CCFF',
          300: '#66B3FF',
          400: '#3399FF',
          500: '#0066CC',
          600: '#0052A3',
          700: '#003D7A',
          800: '#002952',
          900: '#001429',
        },
        secondary: {
          DEFAULT: '#FF8C42',
          50: '#FFF3E6',
          100: '#FFE7CC',
          200: '#FFCF99',
          300: '#FFB766',
          400: '#FF9F33',
          500: '#FF8C42',
          600: '#E67A2E',
          700: '#CC6A1F',
          800: '#B35914',
          900: '#99490A',
        },
        accent: {
          DEFAULT: '#FFB347',
          50: '#FFF7E6',
          100: '#FFEFCC',
          200: '#FFDF99',
          300: '#FFCF66',
          400: '#FFBF33',
          500: '#FFB347',
          600: '#E69F2E',
          700: '#CC8B1F',
          800: '#B37714',
          900: '#99630A',
        },
        text: {
          primary: '#333333',
          secondary: '#666666',
        },
        background: '#F8F9FA',
        border: '#DEE2E6',
      },
      fontFamily: {
        sans: ['var(--font-lato)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}

export default config
