import Footer from '@/SharedComponents/Footer'
import Navbar from '@/SharedComponents/navbar/Navbar'
import { lora, nunito, readexPro } from '@/fonts'
import Providers from '@/providers'
import '@/styles/globals.css'
import { type ChildrenProps } from '@interfaces/ChildrenProps.interface'
import { Suspense } from 'react'
// import { Analytics } from '@vercel/analytics/react'
import 'react-multi-carousel/lib/styles.css'
import Loading from './loading'
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
				<Navbar />
				{/* <Analytics/> */}
				<Suspense fallback={<Loading />}>
					<Providers>{children}</Providers>
				</Suspense>
				<Footer />
			</body>
		</html>
	)
}
