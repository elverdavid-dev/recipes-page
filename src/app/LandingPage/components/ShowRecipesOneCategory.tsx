'use client'

import { type ChildrenProps } from '@interfaces/ChildrenProps.interface'
import { useRouter } from 'next-nprogress-bar'

interface Props extends ChildrenProps {
	id: string
	category: string
}

// Al darle click a una categoria redirigue a la pagina de ver todas las recetas de una categoria

const ShowRecipesOneCategory = ({ children, id, category }: Props) => {
	const router = useRouter()

	return (
		<section
			onClick={() => {
				router.push(`/categorias/${id}?name=${category}`)
			}}
			className="cursor-pointer"
		>
			{children}
		</section>
	)
}

export default ShowRecipesOneCategory
