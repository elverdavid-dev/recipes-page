'use client'

import { Input } from '@nextui-org/react'
import { Search01Icon } from 'hugeicons-react'

const SearchInputPlaceholder = () => {
	return (
		<Input
			role="search"
			placeholder="Buscar recetas..."
			startContent={<Search01Icon />}
			aria-busy
			aria-disabled
			className="pointer-events-none w-[170px] md:w-full"
		/>
	)
}

export default SearchInputPlaceholder
