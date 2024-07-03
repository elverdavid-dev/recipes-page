import Carusel from '@/components/home/carusel'
import Subtitle from '@/components/shared/Subtitle'
import { getAllCategories } from '@/services/categories/get-all-categories'
import { Suspense } from 'react'
import CategoriesSkeleton from '../skeletons/categories-skeleton'

const SectionCategories = async () => {
	const categories = await getAllCategories()
	return (
		<section className="mt-32 px-4 lg:px-20 my-10 2xl:container 2xl:mx-auto">
			<Subtitle>Categorias</Subtitle>
			<Suspense fallback={<CategoriesSkeleton />}>
				<Carusel categories={categories} />
			</Suspense>
		</section>
	)
}

export default SectionCategories
