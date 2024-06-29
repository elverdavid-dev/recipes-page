import Carusel from '@/components/home/carusel'
import Subtitle from '@/components/shared/Subtitle'
import { getAllCategories } from '@/services/categories/get-all-categories'

const SectionCategories = async () => {
	const categories = await getAllCategories()
	return (
		<section className="mt-32 px-4 lg:px-20 my-10 2xl:container 2xl:mx-auto">
			<Subtitle>Categorias</Subtitle>
			<Carusel categories={categories} />
		</section>
	)
}

export default SectionCategories
