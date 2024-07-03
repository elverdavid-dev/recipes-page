'use client'
import { Input } from '@nextui-org/react'
import { Search01Icon } from 'hugeicons-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

const Search = () => {
	//hooks
	const router = useRouter()
	const pathName = usePathname()
	const searchParams = useSearchParams()

	const params = new URLSearchParams(searchParams)

	const handleSearch = useDebouncedCallback((value: string) => {
		if (searchParams.get('page')) {
			params.set('page', '1')
		}
		if (value) {
			params.set('name', value)
		} else {
			params.delete('name')
		}
		router.replace(`/recetas?${params.toString()}`)
	}, 500)

	const defaultValueInput = searchParams.get('name')?.toString()
	return (
		<Input
			classNames={{
				base: 'max-w-full sm:max-w-[35rem] h-12',
				inputWrapper: 'h-full text-default-500 bg-default-400/20 rounded-full',
			}}
			placeholder="Buscar recetas..."
			size="sm"
			autoComplete="off"
			role="search"
			startContent={<Search01Icon size={18} strokeWidth={1.8} />}
			onClear={() => router.replace(pathName)}
			onChange={(event) => handleSearch(event.target.value)}
			defaultValue={defaultValueInput}
		/>
	)
}

export default Search
