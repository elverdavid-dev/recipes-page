import Carusel from '@/components/home/carusel'
import Subtitle from '@/components/shared/common/subtitle'
import type { Categories } from '@/types/categories/categories-interface'
import type { FC } from 'react'

interface Props {
	categories: Categories[]
}

const SectionCategories: FC<Props> = async ({ categories }) => {
	return (
		<section className="mt-32 px-4 lg:px-20 my-10 2xl:container 2xl:mx-auto">
			<Subtitle>Categorias</Subtitle>
			<Carusel categories={categories} />
		</section>
	)
}

export default SectionCategories
