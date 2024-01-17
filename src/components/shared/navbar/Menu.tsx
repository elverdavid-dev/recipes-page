import { optionsMenu } from '@/libs/optionsMenu'
import Link from 'next/link'

interface Props {
	isOpenMenu: boolean
	closeMenu: () => void
	pathName: string
}

const Menu = ({ isOpenMenu, closeMenu, pathName }: Props) => {
	return (
		<ul
			className={`md:flex md:items-center md:static md:z-auto md:w-auto absolute gap-x-4 left-0 z-10 w-full transition-all shadow-md md:shadow-none pb-5 md:pb-0 change-color-navbar bg-base md:bg-transparent ${
				isOpenMenu ? 'opacity-100' : 'top-[-450px] opacity-0 md:opacity-100'
			}`}
		>
			{optionsMenu.map(({ href, title }, i) => (
				<li key={title + i} className="m-3 md:m-auto p-2">
					<Link
						onClick={closeMenu}
						href={href}
						className={`text-lg hover:text-gold border-b-2 border-transparent hover:border-b-gold transition-all ${
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
	)
}

export default Menu
