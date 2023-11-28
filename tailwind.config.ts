import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFAC4B',
        base: '#f6f6f6'
      },
      fontFamily: {
        lora: ['var(--lora)'],
        nunito: ['var(--nunito)'],
        readexPro: ['var(--readexPro)']
      }
    }
  },
  plugins: [nextui()]
}
export default config
