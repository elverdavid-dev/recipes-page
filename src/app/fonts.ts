import localFont from 'next/font/local'

export const onest = localFont({
	src: '../../public/font/onest-400.woff2',
	fallback: ['sans-serif', 'system-ui'],
	display: 'swap',
	preload: true,
	variable: '--onest',
})

export const poppinsBold = localFont({
	src: '../../public/font/poppins-700.woff2',
	fallback: ['sans-serif', 'system-ui'],
	display: 'swap',
	preload: true,
	variable: '--poppins-bold',
})
