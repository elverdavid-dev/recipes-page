'use client'

import { optionsMenu } from '@/lib/optionsMenu'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const NavbarUi = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const pathName = usePathname()
  return (
    <header
      className={`${
        pathName === '/' ? '' : 'sticky'
      } top-0 z-50 2xl:container mx-auto`}
    >
      <nav
        className={`flex items-center justify-between py-4 sm:px-20 px-4 ${
          pathName === '/' ? 'bg-light' : 'bg-[#f9f9f9]'
        }`}
      >
        <Link href={'/'}>
          <Image src="/logo.svg" alt="logo" width="150" height="60" />
        </Link>
        {/* Open menu in mobile */}
        <div
          className="text-2xl lg:hidden cursor-pointer"
          onClick={() => {
            setIsOpenMenu(!isOpenMenu)
          }}
        >
          {isOpenMenu ? <FiX /> : <FiMenu />}
        </div>
        {/* Menu */}
        <div className="space-x-4 hidden lg:block">
          {optionsMenu.map(({ href, title }, i) => (
            <Link
              key={title + i}
              href={href}
              className={`font-nunito text-lg hover:text-gold border-b-2 border-transparent hover:border-gold transition-colors duration-150${
                pathName === href
                  ? 'text-gold font-nunito border-gold'
                  : 'text-slate-950'
              }`}
            >
              {title}{' '}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default NavbarUi
