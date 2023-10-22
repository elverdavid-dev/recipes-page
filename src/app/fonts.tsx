import { Lora, Nunito, Readex_Pro } from 'next/font/google'

export const lora = Lora({
  subsets: ['latin'],
  display: 'block',
  weight: '600',
  variable: '--lora'
})

export const nunito = Nunito({
  subsets: ['latin'],
  display: 'block',
  weight: '500',
  variable: '--nunito'
})

export const readexPro = Readex_Pro({
  subsets: ['latin'],
  preload: true,
  weight: ['700', '500'],
  variable: '--readexPro'
})
