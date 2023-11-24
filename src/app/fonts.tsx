import localFont from 'next/font/local'

export const nunito = localFont({
	src: '../../public/font/nunito.woff2',
	fallback: ['sans-serif'],
	display: 'swap',
	preload: true,
	variable: '--nunito',
})

export const lora = localFont({
	src: '../../public/font/lora.woff2',
	fallback: ['sans-serif'],
	display: 'swap',
	variable: '--lora',
})

export const readexPro = localFont({
	src: '../../public/font/readexPro.woff2',
	fallback: ['sans-serif'],
	display: 'swap',
	preload: true,
	variable: '--readexPro',
})
