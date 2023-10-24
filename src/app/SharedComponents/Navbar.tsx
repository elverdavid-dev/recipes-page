'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import { optionsMenu } from '@/lib/optionsMenu'
import { FiMenu, FiX } from 'react-icons/fi'
import Logo from './Logo'

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const pathName = usePathname()
  return (
    <>
      <header
        className={`relative z-50 2xl:container mx-auto ${
          isOpenMenu && 'fixed'
        }`}
      >
        <div
          className={`${
            isOpenMenu ? 'bg-black/40' : 'bg-transparent'
          } fixed  pointer-events-none inset-0 z-10 h-screen w-screen transition-all duration-200 ease-linear sm:hidden`}
          onClick={() => {
            setIsOpenMenu(false)
          }}
        />
        <nav
          className={`flex justify-between items-center py-5 sm:px-20 px-4 ${
            pathName === '/' ? 'bg-light' : 'bg-[#f9f9f9]'
          }`}
        >
          <Logo />
          <div
            className={`z-30 top-0 right-0 flex h-screen w-52 flex-col items-center justify-center gap-8 bg-light  fixed ${
              isOpenMenu ? 'right-0' : 'translate-x-96'
            } shadow-2xl shadow-orange transition-all duration-700 ease-in
            sm:relative sm:flex sm:h-auto sm:w-full sm:translate-x-0 sm:flex-row sm:items-start sm:justify-end sm:bg-transparent sm:text-center sm:text-base sm:shadow-none sm:col-start-2
            `}
          >
            {isOpenMenu && (
              <FiX
                size={30}
                className="absolute left-4 top-4 h-8 w-8 sm:hidden cursor-pointer"
                onClick={() => {
                  setIsOpenMenu(false)
                }}
              />
            )}
            {optionsMenu.map(({ title, href }, id) => (
              <Link
                key={title + id}
                href={href}
                className={`hover:text-gold transition-all  font-nunito text-lg  ${
                  pathName === href ? 'text-gold' : 'text-slate-900'
                }
                 }`}
              >
                {title}
              </Link>
            ))}
          </div>
          <FiMenu
            size={30}
            className="block h-8 sm:hidden z-20 cursor-pointer"
            onClick={() => {
              setIsOpenMenu(!isOpenMenu)
            }}
          />
        </nav>
      </header>
    </>
  )
}

export default Navbar
