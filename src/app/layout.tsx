import type { Metadata } from 'next'

import Providers from './providers'
import { type ChildrenProps } from '@interfaces/ChildrenProps.interface'
import 'react-multi-carousel/lib/styles.css'
import './styles/globals.css'
import Footer from '@/globalComponents/Footer'
import { kanit, inter } from './fonts'
import Navbar from '@/globalComponents/Navbar'

// Metadata
export const metadata: Metadata = {
  title: 'Landing page',
  description:
    'Descubre una variedad exquisita de recetas culinarias para todos los gustos y ocasiones. Desde platos clásicos hasta creaciones innovadoras, encuentra inspiración para transformar tus ingredientes en obras maestras gastronómicas. ¡Explora, cocina y degusta la magia de la cocina con nosotros!'
}

export default function RootLayout ({ children }: ChildrenProps) {
  return (
    <html lang="en" className={` ${kanit.variable} ${inter.variable}`}>
      <body className="overflow-x-hidden">
        <Navbar />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  )
}
