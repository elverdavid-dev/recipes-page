import { FiMenu, FiX } from 'react-icons/fi'

interface Props {
	isOpenMenu: boolean
	closeMenu: () => void
}

const MenuButton = ({ isOpenMenu, closeMenu }: Props) => {
	return (
		<div
			className="text-2xl md:hidden cursor-pointer"
			onClick={closeMenu}
		>
			{isOpenMenu ? <FiX /> : <FiMenu />}
		</div>
	)
}

export default MenuButton
