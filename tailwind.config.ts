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
          DEFAULT: '#0057B8',
          50: '#E6F0FF',
          100: '#CCE0FF',
          200: '#99C2FF',
          300: '#66A3FF',
          400: '#3385FF',
          500: '#0057B8',
          600: '#004494',
          700: '#003270',
          800: '#00214C',
          900: '#001128',
        },
        secondary: {
          DEFAULT: '#2E8B57',
          50: '#E8F5EE',
          100: '#D1EBDD',
          200: '#A3D7BB',
          300: '#75C399',
          400: '#47AF77',
          500: '#2E8B57',
          600: '#267347',
          700: '#1F5B38',
          800: '#174229',
          900: '#0F2A1A',
        },
        accent: {
          DEFAULT: '#FFD700',
          50: '#FFFEF5',
          100: '#FFFCEB',
          200: '#FFF9D6',
          300: '#FFF5C2',
          400: '#FFF2AD',
          500: '#FFD700',
          600: '#E6C200',
          700: '#CCAC00',
          800: '#B39700',
          900: '#998100',
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
