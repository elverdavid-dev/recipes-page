import Providers from '@/app/providers'
import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/header/navbar'
import type { ChildrenProps } from '@/types/common/children-props'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import 'styles/globals.css'
import '@fontsource-variable/nunito'
import Adsense from '@/components/ads/adsense'
import type { Metadata, Viewport } from 'next'

// Metadata
export const metadata: Metadata = {
	metadataBase: new URL('https://www.globalfood.site'),
	title: 'Explora Recetas de el Mundo en GlobalFood',
	description:
		'Sumérgete en una experiencia gastronómica única que te lleva en un viaje por los sabores del mundo. Explora platos tradicionales arraigados en la cultura de diferentes países o déjate sorprender por creaciones culinarias que rompen fronteras.',
	authors: [
		{ name: 'Elver David Peñate', url: 'https://www.elvportafolio.website/' },
	],
	category: 'recetas',
	applicationName: 'GlobalFood page',
	keywords: [
		'recetas',
		'recetas de todo el mundo',
		'globalfood',
		'global food',
		'deliciosas preparaciones',
		'recetas de diferentes paises',
		'globalfood recetas',
		'recetas caseras',
		'Platos',
		'Gastronomia',
		'Preparaciones',
	],

	publisher: 'vercel',
	openGraph: {
		type: 'website',
		title: 'Explora Recetas de el Mundo en GlobalFood',
		url: 'https://www.globalfood.site',
		images: 'https://www.globalfood.site/og-image.png',
		description:
			'Sumérgete en una experiencia gastronómica única que te lleva en un viaje por los sabores del mundo. Explora platos tradicionales arraigados en la cultura de diferentes países o déjate sorprender por creaciones culinarias que rompen fronteras.',
		siteName: 'GlobalFood',
	},
	twitter: {
		card: 'summary',
		title: 'Explora Recetas de el Mundo en GlobalFood',
		description:
			'Sumérgete en una experiencia gastronómica única que te lleva en un viaje por los sabores del mundo. Explora platos tradicionales arraigados en la cultura de diferentes países',
		images: 'https://www.globalfood.site/og-image.png',
	},
	robots: { index: true },
	icons: 'https://www.globalfood.site/favicon.ico',
	alternates: {
		canonical: 'https://www.globalfood.site',
	},
}
export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
}

export const revalidate = 60 // revalidar los datos de la api cada 60 segundos
export default function RootLayout({ children }: ChildrenProps) {
	return (
		<html lang="es">
			<head>
				<Adsense />
			</head>
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
