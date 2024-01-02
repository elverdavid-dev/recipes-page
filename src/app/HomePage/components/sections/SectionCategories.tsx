import { GetAllCategories } from '../../functions/GetAllCategories'
import Carusel from '../Carusel'

const SectionCategories = async () => {
	const Categories = await GetAllCategories()

	return (
		<section className="mt-32 px-4 lg:px-20 my-10 2xl:container 2xl:mx-auto">
			<h2 className="Subtitle">Categorias</h2>
			<Carusel categories={Categories} />
		</section>
	)
}

export default SectionCategories
