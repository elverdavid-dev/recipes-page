"use client"
import { Button, Input } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { FiSearch } from "react-icons/fi"

interface Props {
	handleValue: (value: string) => Promise<void>
}
export default function Search({ handleValue }: Props) {
	const [emptyValue, setEmptyValue] = useState("")

	// Hace la busqueda de la receta que se introdujo en el input
	const handleSearch = () => {
		handleValue(emptyValue).catch(() => {
			console.error("error al buscar recetas por nombre")
		})
	}

	useEffect(() => {
		if (emptyValue === "") {
			handleSearch()
		}
	}, [emptyValue])

	// Si se presiona la tecla "Enter", se ejecuta la búsqueda de la receta.
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			handleSearch()
		}
	}

	return (
		<div className="flex gap-x-2 mt-16 justify-center mx-4 items-center">
			<Input
				value={emptyValue}
				onValueChange={setEmptyValue}
				isClearable
				size="md"
				className="lg:w-[500px] font-nunito"
				variant="faded"
				placeholder="Buscar recetas..."
				startContent={<FiSearch className="text-slate-500 text-lg" />}
				onKeyDown={handleKeyDown}
			/>
			<Button type="submit" size="lg" onClick={handleSearch}>
				Buscar
			</Button>
		</div>
	)
}
