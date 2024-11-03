'use client'

import SearchInput from '@/components/layout/header/search-input'
import SearchInputPlaceholder from '@/components/layout/header/search-input-placeholder'
import Logo from '@/components/shared/common/logo'
import ThemeToggle from '@/components/theme/theme-toggle'
import { optionsMenu } from '@/utils/common/options-menu'
import {
	Button,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
	cn,
} from '@nextui-org/react'
import { MultiplicationSignIcon, Search01Icon } from 'hugeicons-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Suspense, useState } from 'react'
import SearchInputMobile from './search-input-mobile'

const NewNavbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isSearchOpen, setIsSearchOpen] = useState(false)
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
					{/* Search Desktop */}
					<section className="hidden md:block">
						<Suspense fallback={<SearchInputPlaceholder />}>
							<SearchInput />
						</Suspense>
					</section>
					{/* Search Mobile */}
					{isSearchOpen && (
						<SearchInputMobile
							openSearch={() => setIsSearchOpen(!isSearchOpen)}
						/>
					)}
				</NavbarItem>
				<Button
					isIconOnly
					variant="light"
					className="dark:data-[hover=true]:bg-default/5 md:hidden"
					onClick={() => setIsSearchOpen(!isSearchOpen)}
				>
					<Search01Icon size={18} />
				</Button>

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
