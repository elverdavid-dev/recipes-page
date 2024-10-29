'use client'
import { Input } from '@nextui-org/react'
import { Search01Icon } from 'hugeicons-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

const SearchInput = () => {
	//hooks
	const router = useRouter()
	const searchParams = useSearchParams()

	const query = searchParams.get('name')?.toString()

	const handleSearch = useDebouncedCallback((value: string) => {
		const params = new URLSearchParams(searchParams)
		if (value) {
			params.set('name', value)
			params.delete('page')
		}
		router.replace(`/recetas?${params.toString()}`)
	}, 400)

	return (
		<Input
			className="w-[170px] md:w-full"
			placeholder="Buscar recetas..."
			radius="full"
			autoComplete="off"
			role="search"
			isClearable
			startContent={<Search01Icon size={18} strokeWidth={1.8} />}
			onChange={(event) => handleSearch(event.target.value)}
			defaultValue={query}
		/>
	)
}

export default SearchInput
