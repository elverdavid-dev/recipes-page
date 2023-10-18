import { Kanit, Lora, Nunito } from 'next/font/google'

export const kanit = Kanit({
  subsets: ['latin'],
  preload: true,
  display: 'block',
  weight: '500',
  style: 'normal',
  variable: '--kanit'
})

export const lora = Lora({
  subsets: ['latin'],
  display: 'block',
  weight: '600',
  style: 'normal',
  variable: '--lora'
})

export const nunito = Nunito({
  subsets: ['latin'],
  fallback: ['sans-serif'],
  display: 'block',
  weight: '500',
  style: 'normal',
  variable: '--nunito'
})
