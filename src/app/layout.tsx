import type { Metadata } from 'next'

import Footer from '@/SharedComponents/Footer'
import Navbar from '@/SharedComponents/navbar/Navbar'
import { lora, nunito, readexPro } from '@/fonts'
import Providers from '@/providers'
import '@/styles/globals.css'
import { type ChildrenProps } from '@interfaces/ChildrenProps.interface'
// import { Analytics } from '@vercel/analytics/react'
import 'react-multi-carousel/lib/styles.css'

// Metadata
export const metadata: Metadata = {
	title: 'Landing page',
	description:
		'Descubre una variedad exquisita de recetas culinarias para todos los gustos y ocasiones. Desde platos clásicos hasta creaciones innovadoras, encuentra inspiración para transformar tus ingredientes en obras maestras gastronómicas. ¡Explora, cocina y degusta la magia de la cocina con nosotros!',
}

export const revalidate = 60 // revalidate at most every hour

export default function RootLayout({ children }: ChildrenProps) {
	return (
		<html
			lang="es"
			className={`  ${lora.variable} ${nunito.variable} ${readexPro.variable}`}
		>
			<body>
				<Navbar />
				{/* <Analytics/> */}
				<Providers>{children}</Providers>
				<Footer />
			</body>
		</html>
	)
}
