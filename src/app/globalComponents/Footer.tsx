import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-light flex flex-col xl:flex-row justify-center items-center gap-4 xl:gap-0 xl:justify-between w-full p-5 mt-44 font-nunito">
      <div>
        <Logo />
      </div>
      <div>
        <p className="text-gray-800 text-center md:text-left flex gap-2">
          &copy; 2023
          <span className="text-gray-900 font-bold">GlobalFood.</span>{' '}
          <a
            href="https://www.elvportafolio.website"
            target="_blank"
            rel="noreferrer"
            className="border-b-2 border-transparent hover:border-gold transition-colors text-gray-700 hover:text-gray-900"
          >
            Elver David Peñate
          </a>
        </p>
      </div>
      <div className="flex flex-col xl:flex-row items-center gap-2">
        <Link
          href="#"
          className="text-gray-700  hover:text-gray-900 transition-colors duration-300"
        >
          Terminos y condiciones
        </Link>
        <span className="hidden xl:flex">|</span>
        <Link
          href="#"
          className="text-gray-700  hover:text-gray-900  transition-colors duration-300"
        >
          Política de privacidad
        </Link>
      </div>
    </footer>
  )
}
