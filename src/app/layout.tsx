import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/shared/Footer'
import { lora, nunito, readexPro } from '@/fonts'
import Providers from '@/providers'
import { type ChildrenProps } from '@interfaces/ChildrenProps.interface'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import 'styles/globals.css'
// Styles of carusel
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

// Metadata
export { metadata } from './metadata'

export const revalidate = 60 // revalidar los datos de la api cada 60 segundos
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
