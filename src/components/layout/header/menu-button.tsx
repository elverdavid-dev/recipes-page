import { Menu01Icon, MultiplicationSignIcon } from 'hugeicons-react'

interface Props {
	isOpenMenu: boolean
	closeMenu: () => void
}

const MenuButton = ({ isOpenMenu, closeMenu }: Props) => {
	return (
		<div className="text-2xl md:hidden cursor-pointer" onClick={closeMenu}>
			{isOpenMenu ? <MultiplicationSignIcon /> : <Menu01Icon />}
		</div>
	)
}

export default MenuButton
