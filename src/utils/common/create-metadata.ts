import type { Metadata } from 'next'

interface Props {
	title: string
	description?: string
	canonicalUrl?: string
	ogImg?: string
	category?: string
}

const siteUrl = 'https://www.globalfood.site/'
const siteName = 'GlobalFood'
const descriptionDefault =
	'Sumérgete en una experiencia gastronómica única que te lleva en un viaje por los sabores del mundo. Explora platos tradicionales arraigados en la cultura de diferentes países o déjate sorprender por creaciones culinarias que rompen fronteras.'

export const createMetadata = ({
	title,
	description,
	ogImg,
	canonicalUrl,
	category,
}: Props): Metadata => {
	return {
		title: `${title} | GlobalFood`,
		description: description ?? descriptionDefault,
		metadataBase: new URL(siteUrl),
		alternates: {
			canonical: `${siteUrl}${canonicalUrl ?? ''}`,
		},
		category: `recetas ${category ?? 'sin categoria'}`,
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
			},
		},
		openGraph: {
			title: {
				template: '%s | GlobalFood',
				default: 'GlobalFood',
			},
			description: description ?? descriptionDefault,
			url: `${siteUrl}/${canonicalUrl}`,
			siteName,
			images: [
				{
					url: ogImg ?? '/og-image.png',
				},
			],
			locale: 'en',
			type: 'website',
		},
		twitter: {
			card: 'summary',
			title: `${title} | GlobalFood`,
			description: description ?? descriptionDefault,
			images: [ogImg ?? '/og-image.png'],
		},
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
	}
}
