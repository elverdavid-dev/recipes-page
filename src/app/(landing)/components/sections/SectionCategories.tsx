import Subtitle from '@/components/shared/Subtitle'
import { GetAllCategories } from '@/services/GetAllCategories'
import Carusel from '../Carusel'

const SectionCategories = async () => {
	const Categories = await GetAllCategories()

	return (
		<section className="mt-32 px-4 lg:px-20 my-10 2xl:container 2xl:mx-auto">
			<Subtitle>Categorias</Subtitle>
			<Carusel categories={Categories} />
		</section>
	)
}

export default SectionCategories
