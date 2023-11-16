'use client'

import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
const NotFound = () => {
	const router = useRouter()
	const redirectToHome = () => {
		router.push('/')
	}
	return (
		<section className="bg-[#f9f9f9] h-screen">
			<div className="flex justify-center">
				<video
					src="/404/404-NotFound.mp4"
					autoPlay
					loop
					muted
					width="300"
					height="300"
					className="rounded-full"
				/>
			</div>
			<div className="text-center text-slate-950">
				<strong className="font-extrabold text-7xl">Oops!</strong>
				<p className="text-2xl font-readexPro mt-5">Esta pagina no existe!</p>
				<Button
					size="lg"
					className="mt-5 bg-gold  text-slate-950 rounded-full capitalize font-nunito"
					onClick={redirectToHome}
				>
					Regresar al inicio
				</Button>
			</div>
		</section>
	)
}

export default NotFound
