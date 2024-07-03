import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
export const metadata: Metadata = {
	title: 'Pagina no encontrada',
}

const NotFound = () => {
	return (
		<main>
			<Image
				src="/404/404-notFound.svg"
				alt="notfound"
				width={400}
				height={100}
				className="mx-auto"
			/>
			<div className="text-center">
				<strong className="font-extrabold text-7xl">Oops!</strong>
				<p className="text-2xl font-extrabold mt-2 text-gray-800">
					Esta pagina no existe!
				</p>
				<Link
					href="/"
					className="mt-5 inline-block bg-gold rounded-full capitalize py-3 px-8 text-white"
				>
					Regresar al inicio
				</Link>
			</div>
		</main>
	)
}

export default NotFound
