'use client'

import { Button } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
const SectionHero = () => {
	return (
		<section className="lg:px-20 px-4 grid lg:grid-cols-2  lg:h-[580px] relative 2xl:container mx-auto">
			<div className="lg:w-[600px] lg:h-auto h-[60rem]">
				<h1 className="lg:text-6xl tracking-tight text-4xl font-poppins-bold  lg:mt-32 mt-16 text-slate-950 text-balance">
					Explora recetas de todo el
					<strong className="text-gold"> Mundo</strong>
				</h1>

				<p className="text-lg  text-slate-700 block mt-4 text-pretty">
					Sumérgete en una experiencia gastronómica única que te lleva en un
					viaje por los sabores del mundo. Explora platos tradicionales
					arraigados en la cultura de diferentes países.
				</p>

				<Button
					as={Link}
					className="bg-gold mt-4 capitalize text-white"
					radius="sm"
					size="lg"
					href="/recetas"
				>
					Explorar Recetas
				</Button>
			</div>

			<div className="relative lg:mt-5 mt-16 lg:block">
				<Image
					src="/plate3.png"
					alt="plato numero 1"
					width="343"
					height="338"
					className="absolute right-0 bottom-[22rem] w-[230px] h-auto md:w-[343px] md:right-10 lg:-top-5 lg:right-10 lg:w-auto lg:h-auto z-10"
					priority={true}
				/>
				<Image
					src="/plate2.png"
					alt="plato numero 2"
					width="202"
					height="200"
					className="absolute  -left-4 bottom-[15rem] w-[200px] h-auto md:w-[202px] md:left-44 lg:left-28 lg:top-[290px]  lg:w-auto lg:h-auto z-10"
					priority={true}
				/>
				<Image
					src="/plate1.png"
					alt="plato numero 3"
					width="275"
					height="262"
					className="absolute w-[190px] right-0 bottom-[9rem] h-auto md:w-[275px] md:bottom-[7rem] md:right-16  lg:-right-10 lg:top-[300px] lg:w-auto lg:h-auto z-10"
					priority={true}
				/>{' '}
				<div className="absolute w-52 h-52 bg-gold/80 rounded-full right-5 bottom-[15rem] lg:top-44 lg:right-20 blur-3xl" />
			</div>

			<div className="absolute left-0 bottom-7">
				<Image src="/decoration.svg" alt="decoration" width="179" height="37" />
				<Image src="/decoration.svg" alt="decoration" width="179" height="37" />
			</div>
		</section>
	)
}

export default SectionHero
