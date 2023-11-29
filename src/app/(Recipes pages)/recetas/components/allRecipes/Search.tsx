'use client'
import { Input } from '@nextui-org/react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { FiSearch } from 'react-icons/fi'
import { useDebouncedCallback } from 'use-debounce'

export default function Search() {
	const { replace } = useRouter()
	const searchParams = useSearchParams()
	const pathName = usePathname()

	const handleSearch = useDebouncedCallback((value: string) => {
		const params = new URLSearchParams(searchParams)
		if (searchParams.get('page')) {
			params.set('page', '1')
		}
		if (value) {
			params.set('name', value)
		} else {
			params.delete('name')
		}
		replace(`${pathName}?${params.toString()}`)
	}, 300)

	const defaultValueInput = searchParams.get('name')?.toString()
	return (
		<section className="flex mt-16 justify-center items-center">
			<Input
				onChange={(event) => handleSearch(event.target.value)}
				size="sm"
				className="lg:w-[600px] lg:mx-0 mx-2 font-nunito"
				variant="faded"
				placeholder="Buscar recetas..."
				startContent={<FiSearch className="text-slate-500 text-lg" />}
				role="search"
				defaultValue={defaultValueInput}
			/>
		</section>
	)
}
