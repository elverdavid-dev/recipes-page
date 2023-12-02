'use client'

import Logo from '@/SharedComponents/Logo'
import useNavbar from '@/hooks/useNavbar'
import { usePathname } from 'next/navigation'
import Menu from './Menu'
import MenuButton from './MenuButton'

const Navbar = () => {
	const pathName = usePathname()
	const { isOpenMenu, closeMenu } = useNavbar()

	return (
		<header className="sticky top-0 z-50 2xl:container mx-auto">
			<nav className="Navbar">
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
