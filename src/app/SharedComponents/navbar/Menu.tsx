import { optionsMenu } from '@/lib/optionsMenu'
import Link from 'next/link'

interface Props {
	isOpenMenu: boolean
	closeMenu: () => void
	pathName: string
}

const Menu = ({ isOpenMenu, closeMenu, pathName }: Props) => {
	return (
		<ul
			className={`Content-menu-items ${
				isOpenMenu ? 'opacity-100' : 'top-[-450px] opacity-0 md:opacity-100'
			} ${pathName === '/' ? 'bg-light' : 'bg-base'}`}
		>
			{optionsMenu.map(({ href, title }, i) => (
				<li key={title + i} className="m-3 md:m-auto p-2">
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
	)
}

export default Menu
