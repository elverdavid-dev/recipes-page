'use client'

import Logo from '@/SharedComponents/Logo'
import { optionsMenu } from '@/lib/optionsMenu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const pathName = usePathname()
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const closeMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }
  return (
    <header
      className={`${
        pathName === '/' ? '' : 'sticky'
      } top-0 z-50 2xl:container mx-auto`}
    >
      <nav
        className={`md:flex md:items-center md:justify-between py-2 lg:px-20 px-4  relative ${
          pathName === '/' ? 'bg-light' : 'bg-base'
        }`}
      >
        <div className="flex justify-between items-center mx-2">
          <Logo />
          {/* Open menu in mobile */}
          <div
            className="text-2xl md:hidden cursor-pointer"
            aria-label="button close and open menu"
            onClick={closeMenu}
          >
            {isOpenMenu ? <FiX /> : <FiMenu />}
          </div>
        </div>

        {/* Menu list */}
        <ul
          className={`Content-menu-items ${
            isOpenMenu ? 'opacity-100' : 'top-[-450px] opacity-0 md:opacity-100'
          } ${pathName === '/' ? 'bg-light' : 'bg-base'}`}
        >
          {optionsMenu.map(({ href, title }, i) => (
            <li key={title + i} className="py-5 px-3">
              <Link
                onClick={closeMenu}
                href={href}
                className={`Menu-item ${
                  pathName === href
                    ? 'text-gold md:border-b-2 lg:border-b-gold Active-link'
                    : 'text-slate-950'
                }`}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
