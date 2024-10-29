'use client'

import SearchInput from '@/components/layout/header/search-input'
import SearchInputPlaceholder from '@/components/layout/header/search-input-placeholder'
import Logo from '@/components/shared/common/logo'
import ThemeToggle from '@/components/theme/theme-toggle'
import { optionsMenu } from '@/utils/common/options-menu'
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
	cn,
} from '@nextui-org/react'
import { Search01Icon } from 'hugeicons-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Suspense, useState } from 'react'

const NewNavbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const pathName = usePathname()
	return (
		<Navbar
			maxWidth="full"
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
		>
			<NavbarBrand>
				<Logo />
			</NavbarBrand>
			<NavbarContent justify="start" className="hidden md:flex">
				{optionsMenu.map(({ href, title }) => (
					<NavbarItem key={title}>
						<Link
							href={href}
							className={cn(
								'text-lg hover:text-gold hover:border-b-2 hover:border-gold transition-all',
								pathName === href &&
									'text-gold border-b-2 border-gold Active-link',
							)}
						>
							{title}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem>
					<Suspense fallback={<SearchInputPlaceholder />}>
						<SearchInput />
					</Suspense>
				</NavbarItem>
				{/* <Search01Icon size={18} /> */}
				<ThemeToggle />
				{/* Toggle mobile*/}
				<NavbarMenuToggle
					className="md:hidden"
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				/>
			</NavbarContent>

			{/* Mobile menu */}

			<NavbarMenu>
				{optionsMenu.map(({ href, title }) => (
					<NavbarMenuItem key={title}>
						<Link
							href={href}
							className={cn(
								'text-xl',
								pathName === href && 'text-gold font-bold',
							)}
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							{title}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	)
}

export default NewNavbar
