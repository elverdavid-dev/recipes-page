'use client'
import { Button, Input } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { FiSearch } from 'react-icons/fi'

export default function Search() {
	const router = useRouter()
	const [emptyValue, setEmptyValue] = useState<string | undefined>('')

	const handleSearch = () => {
		router.push(`/recetas?name=${emptyValue}`)
	}

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
	}

	return (
		<form
			className="flex gap-x-2 mt-16 justify-center mx-4 items-center"
			onSubmit={handleSubmit}
		>
			<Input
				value={emptyValue}
				onValueChange={setEmptyValue}
				isClearable
				size="sm"
				className="lg:w-[500px] font-nunito"
				variant="faded"
				placeholder="Buscar recetas..."
				startContent={<FiSearch className="text-slate-500 text-lg" />}
				role="search"
			/>
			<Button type="submit" size="lg" onClick={handleSearch}>
				Buscar
			</Button>
		</form>
	)
}
