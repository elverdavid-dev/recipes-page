import { type ParamProps } from '@interfaces/ParamProps.interface'
import { Metadata } from 'next'
import Aside from '../components/oneRecipe/AsideSection'
import ShowDataRecipe from '../components/oneRecipe/ShowDataRecipe'

export const metadata: Metadata = {
	title: 'Receta•GlobalFood',
}

const PageById = async ({ params }: ParamProps) => {
	const id = params.id

	return (
		<>
			<section className="container px-2 md:px-8 lg:px-10  mx-auto mt-16 lg:flex lg:justify-between gap-x-16">
				<ShowDataRecipe id={id} />
				<Aside />
			</section>
		</>
	)
}

export default PageById
