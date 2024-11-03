'use client'

import { Button } from '@nextui-org/react'
import { MultiplicationSignIcon } from 'hugeicons-react'
import { type FC, Suspense } from 'react'
import SearchInput from './search-input'
import SearchInputPlaceholder from './search-input-placeholder'

interface Props {
	openSearch: () => void
}

const SearchInputMobile: FC<Props> = ({ openSearch }) => {
	return (
		<section className="absolute right-0 top-0 z-50 w-full bg-background p-3 flex items-center gap-x-1 md:hidden">
			<Suspense fallback={<SearchInputPlaceholder />}>
				<SearchInput />
			</Suspense>
			<Button variant="light" isIconOnly onClick={openSearch}>
				<MultiplicationSignIcon />
			</Button>
		</section>
	)
}

export default SearchInputMobile
