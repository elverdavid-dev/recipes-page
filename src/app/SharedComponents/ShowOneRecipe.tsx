"use client"

import { type ChildrenProps } from "@interfaces/ChildrenProps.interface"
import { useRouter } from "next/navigation"

interface RecipeProps extends ChildrenProps {
	id: string
}

/**
 * @description Redirigir a la pagina, donde se puede ver todas la informacion de una recetas
 * @param id  de la receta de la cual se desea ver la información
 * @param children  Contenido que se renderizará dentro del componente.
 */

const ShowOneRecipe = ({ children, id }: RecipeProps) => {
	const router = useRouter()

	return (
		<section
			onClick={() => {
				router.push(`/recetas/${id}`)
			}}
			className="cursor-pointer"
		>
			{children}
		</section>
	)
}

export default ShowOneRecipe
