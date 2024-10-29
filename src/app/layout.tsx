import Providers from '@/app/providers'
import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/header/navbar'
import type { ChildrenProps } from '@/types/common/children-props'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import 'styles/globals.css'
import '@fontsource-variable/nunito'
import Adsense from '@/components/ads/adsense'
import NewNavbar from '@/components/layout/header/new-navbar'
import { createMetadata } from '@/utils/common/create-metadata'
import type { Viewport } from 'next'

export const metadata = createMetadata({ title: 'Explora Recetas del Mundo ' })
export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
}

export const revalidate = 60 // revalidar los datos de la api cada 60 segundos
export default function RootLayout({ children }: ChildrenProps) {
	return (
		<html lang="es" suppressHydrationWarning>
			<head>
				<Adsense />
			</head>
			<body className="bg-background text-foreground">
				<Analytics mode="auto" />
				<SpeedInsights />
				<Providers>
					{/* <Navbar /> */}
					<NewNavbar />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
