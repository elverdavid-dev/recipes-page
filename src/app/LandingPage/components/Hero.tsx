'use client'

import { Button } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCircle } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="lg:px-20 px-4 grid lg:grid-cols-2 bg-light lg:h-[580px] relative 2xl:container mx-auto">
      <div className="lg:w-[600px]">
        <h1 className="lg:text-5xl text-4xl font-readexPro font-extrabold lg:mt-32 mt-16 text-slate-950">
          Explora recetas de <br className="lg:block hidden" /> todo el
          <strong className="text-gold"> Mundo</strong>
        </h1>

        <span className="text-lg font-nunito text-slate-700 block mt-4">
          Sumérgete en una experiencia gastronómica única que{' '}
          <br className="lg:block hidden" /> te lleva en un viaje por los
          sabores del mundo.
        </span>

        <Button
          as={Link}
          className="font-nunito bg-gold mt-4 rounded-full capitalize"
          size="lg"
          href="/recetas"
        >
          Ver recetas
        </Button>
      </div>

      <div className="relative lg:mt-5 mt-16 lg:block hidden">
        <Image
          src="/plate3.png"
          alt="plato numero 1"
          width="343"
          height="338"
          className="absolute -top-5 right-10 z-20"
        />
        <Image
          src="/plate2.png"
          alt="plato numero 2"
          width="202"
          height="200"
          className="absolute  right-[45%] top-[290px] z-10"
        />
        <Image
          src="/plate1.png"
          alt="plato numero 3"
          width="275"
          height="262"
          className="absolute  -right-10 top-[300px]"
        />{' '}
        <FaCircle
          size={56}
          className="text-gold lg:absolute lg:top-10 lg:inset-x-32 lg:block hidden"
        />
        <FaCircle
          size={20}
          className="text-gold lg:absolute lg:top-60 lg:inset-x-44 lg:block hidden"
        />
        <FaCircle
          size={75}
          className="text-gold lg:absolute lg:top-60 lg:right-0 lg:block hidden"
        />
        <FaCircle
          size={40}
          className="text-gold lg:absolute lg:top-[450px] lg:inset-x-16 lg:block hidden"
        />
      </div>

      <div className="absolute left-0 bottom-7 lg:block hidden">
        <Image src="/decoration.svg" alt="decoration" width="179" height="37" />
        <Image src="/decoration.svg" alt="decoration" width="179" height="37" />
      </div>
    </section>
  )
}

export default Hero
