'use client'

import { Button } from '@nextui-org/react'
import Link from 'next/link'
const SectionHero = () => {
	return (
		<section className=" px-2 md:max-w-6xl  relative 2xl:container mx-auto">
			<h1 className="lg:text-6xl tracking-tight text-4xl text-center font-poppins-bold  lg:mt-32 mt-16 text-slate-950 text-balance">
				Explora recetas de todo el
				<strong className="text-gold"> Mundo</strong>
			</h1>
			<div className="flex items-center flex-col">

				<p className="text-lg text-slate-700 block mt-4 text-pretty md:text-center">
					Sumérgete en una experiencia gastronómica única que te lleva en un
					viaje por los sabores del mundo. Explora platos tradicionales
					arraigados en la cultura de diferentes países.
				</p>

				<Button
					as={Link}
					className="bg-gold mt-4 capitalize text-white"
					radius="full"
					size="lg"
					href="/recetas"
				>
					Explorar Recetas
				</Button>
			</div>
			<div className='bg-gold/80 w-20 h-20 md:w-32 md:h-32 rounded-full absolute right-20 top-0 md:right-28 blur-3xl' />

		</section>
	)
}

export default SectionHero
