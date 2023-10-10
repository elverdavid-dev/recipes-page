import { Inter, Kanit } from 'next/font/google'

export const kanit = Kanit({
  subsets: ['latin'],
  preload: true,
  display: 'swap',
  fallback: ['system-ui', 'arial'],
  weight: '500',
  style: 'normal',
  variable: '--kanit'
})

export const inter = Inter({
  subsets: ['latin'],
  preload: true,
  display: 'swap',
  fallback: ['system-ui', 'arial'],
  weight: '400',
  style: 'normal',
  variable: '--inter'
})
