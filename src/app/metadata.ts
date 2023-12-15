import { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.globalfood.site/'),
  title: 'Explora Recetas de el Mundo en GlobalFood',
  description:
    'Sumérgete en una experiencia gastronómica única que te lleva en un viaje por los sabores del mundo. Explora platos tradicionales arraigados en la cultura de diferentes países o déjate sorprender por creaciones culinarias que rompen fronteras.',
  authors: [
    { name: 'Elver David Peñate', url: 'https://www.elvportafolio.website/' }
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
    'Preparaciones'
  ],

  publisher: 'vercel',
  openGraph: {
    type: 'website',
    title: 'Explora Recetas de el Mundo en GlobalFood',
    url: 'https://www.globalfood.site',
    images: 'https://www.globalfood.site/og-image.png',
    description:
      'Sumérgete en una experiencia gastronómica única que te lleva en un viaje por los sabores del mundo. Explora platos tradicionales arraigados en la cultura de diferentes países o déjate sorprender por creaciones culinarias que rompen fronteras.',
    siteName: 'GlobalFood'
  },
  twitter: {
    card: 'summary',
    title: 'Explora Recetas de el Mundo en GlobalFood',
    description:
      'Sumérgete en una experiencia gastronómica única que te lleva en un viaje por los sabores del mundo. Explora platos tradicionales arraigados en la cultura de diferentes países',
    images: 'https://www.globalfood.site/og-image.png'
  },
  robots: { index: true, follow: true }
}

export const viewport: Viewport = {
  themeColor: '#f6f6f6'
}
