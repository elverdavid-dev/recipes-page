import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/shared/Footer'
import { lora, nunito, readexPro } from '@/fonts'
import Providers from '@/providers'
import '@/styles/globals.css'
import { type ChildrenProps } from '@interfaces/ChildrenProps.interface'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
// Styles of carusel
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

import { metadata } from './metadata'
// Metadata
export { metadata }

export const revalidate = 60 // revalidate at most every hour
export default function RootLayout({ children }: ChildrenProps) {
	return (
		<html
			lang="es"
			className={`  ${lora.variable} ${nunito.variable} ${readexPro.variable}`}
		>
			<body>
				<Analytics mode="auto" />
				<SpeedInsights />
				<Navbar />
				<Providers>{children}</Providers>
				<Footer />
			</body>
		</html>
	)
}
