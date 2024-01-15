'use client'

import { Button } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCircle } from 'react-icons/fa'

const Hero = () => {
	return (
		<section className="lg:px-20 px-4 grid lg:grid-cols-2  lg:h-[580px] relative 2xl:container mx-auto">
			<div className="lg:w-[600px] lg:h-auto h-[60rem]">
				<h1 className="lg:text-5xl text-4xl font-readexPro font-extrabold lg:mt-32 mt-16 text-slate-950 text-balance">
					Explora recetas de todo el
					<strong className="text-gold"> Mundo</strong>
				</h1>

				<p className="text-lg font-nunito text-slate-700 block mt-4 text-balance">
					Sumérgete en una experiencia gastronómica única que te lleva en un
					viaje por los sabores del mundo. Explora platos tradicionales
					arraigados en la cultura de diferentes países.
				</p>

				<Button
					as={Link}
					className="font-nunito bg-gold mt-4 rounded-full capitalize"
					size="lg"
					href="/recetas"
				>
					Explorar Recetas
				</Button>
			</div>

			<div className="relative lg:mt-5 mt-16 lg:block ">
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
					className="absolute  -left-4 bottom-[15rem] w-[200px] h-auto md:w-[202px] md:left-44 lg:right-[45%] lg:top-[290px]  lg:w-auto lg:h-auto"
				/>
				<Image
					src="/plate1.png"
					alt="plato numero 3"
					width="275"
					height="262"
					className="absolute w-[190px] right-0 bottom-[9rem] h-auto md:w-[275px] md:bottom-[7rem] md:right-16  lg:-right-10 lg:top-[300px] lg:w-auto lg:h-auto"
				/>{' '}
				<FaCircle
					size={56}
					className="text-gold absolute lef-0 bottom-[28rem] md:left-64 md:bottom-[35rem] lg:top-10 lg:inset-x-32 lg:block"
				/>
				<FaCircle
					size={20}
					className="text-gold absolute lg:top-60 left-16 bottom-[10rem] lg:inset-x-44"
				/>
				<FaCircle
					size={75}
					className="text-gold absolute lg:top-60 lg:right-0 lg:block right-0 bottom-[33rem]"
				/>
				<FaCircle
					size={40}
					className="text-gold absolute right-36 bottom-[20rem] md:right-16 lg:top-[450px] lg:inset-x-16"
				/>
			</div>

			<div className="absolute left-0 bottom-7">
				<Image src="/decoration.svg" alt="decoration" width="179" height="37" />
				<Image src="/decoration.svg" alt="decoration" width="179" height="37" />
			</div>
		</section>
	)
}

export default Hero
