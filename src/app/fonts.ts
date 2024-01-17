import localFont from 'next/font/local'

export const onest = localFont({
  src: '../../public/font/onest-400.woff2',
  fallback: ['sans-serif', 'system-ui'],
  display: 'swap',
  preload: true,
  variable: '--onest'
})

export const onestBold = localFont({
  src: '../../public/font/readex-pro-700.woff2',
  fallback: ['sans-serif', 'system-ui'],
  display: 'swap',
  preload: true,
  variable: '--onest-bold'
})
