'use client'

import { Button } from '@nextui-org/react'
import { useRouter } from 'next-nprogress-bar'

// Boton para ir a la pagina de paises
const RedirectPageCountry = () => {
	const router = useRouter()
	return (
		<section className="flex justify-center items-center mt-10">
			<Button
				size="lg"
				variant="ghost"
				radius="sm"
				className="px-32 font-nunito"
				onClick={() => {
					router.push('/paises')
				}}
			>
				Ver mas
			</Button>
		</section>
	)
}

export default RedirectPageCountry
