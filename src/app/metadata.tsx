import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Inicio•GlobalFood',
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
		'deliciosas preparaciones',
		'recetas de diferentes paises',
	],
	publisher: 'vercel',
	openGraph: {
		type: 'website',
		title: 'Inicio-GlobalFood',
		description:
			'Sumérgete en una experiencia gastronómica única que te lleva en un viaje por los sabores del mundo. Explora platos tradicionales arraigados en la cultura de diferentes países o déjate sorprender por creaciones culinarias que rompen fronteras.',
		siteName: 'GlobalFood',
	},
	robots: 'index,follow',
}
