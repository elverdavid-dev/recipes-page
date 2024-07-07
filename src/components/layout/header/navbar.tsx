'use client'

import Logo from '@/components/shared/common/logo'
import useNavbar from '@/libs/hooks/use-navbar'
import { usePathname } from 'next/navigation'
import Menu from '@/components/layout/header/menu'
import MenuButton from '@/components/layout/header/menu-button'

const Navbar = () => {
	const pathName = usePathname()
	const { isOpenMenu, closeMenu } = useNavbar()

	return (
		<header className="sticky top-0 z-50 2xl:container mx-auto bg-base">
			<nav className="md:flex md:items-center md:justify-between py-2 lg:px-20 px-4  relative">
				<section className="flex justify-between items-center mx-2">
					<Logo />
					<MenuButton isOpenMenu={isOpenMenu} closeMenu={closeMenu} />
				</section>
				<Menu
					closeMenu={closeMenu}
					isOpenMenu={isOpenMenu}
					pathName={pathName}
				/>
			</nav>
		</header>
	)
}

export default Navbar
