import type { Metadata } from 'next'

import Footer from '@/SharedComponents/Footer'
import { type ChildrenProps } from '@interfaces/ChildrenProps.interface'
import 'react-multi-carousel/lib/styles.css'
import Navbar from './SharedComponents/Navbar'
import { lora, nunito, readexPro } from './fonts'
import Providers from './providers'
import './styles/globals.css'

// Metadata
export const metadata: Metadata = {
  title: 'Landing page',
  description:
    'Descubre una variedad exquisita de recetas culinarias para todos los gustos y ocasiones. Desde platos clásicos hasta creaciones innovadoras, encuentra inspiración para transformar tus ingredientes en obras maestras gastronómicas. ¡Explora, cocina y degusta la magia de la cocina con nosotros!'
}

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html
      lang="es"
      className={`  ${lora.variable} ${nunito.variable} ${readexPro.variable}`}
    >
      <body>
        <Navbar />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  )
}
