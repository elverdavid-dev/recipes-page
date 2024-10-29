import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gold: '#FFAC4B',
        base: '#f6f6f6'
      },
    }
  },
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          background: "#f6f6f6",
          foreground: "#1f2937",
          primary: {
            DEFAULT: "#FFAC4B",
            foreground: "#fff"
          }
        }
      },
      dark: {
        colors: {
          background: "#010409",
          foreground: "#d1d5db",
          primary: {
            DEFAULT: "#FFAC4B",
            foreground: "#fff"
          }
        }
      }
    }
  })]
}
export default config
