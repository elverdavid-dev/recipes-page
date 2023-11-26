import CardRecipe from '@/SharedComponents/CardRecipe'
import DynamicTitle from '@/SharedComponents/DynamicTitle'
import NotFound from '@/SharedComponents/NotFound'
import ShowOneRecipe from '@/SharedComponents/ShowOneRecipe'
import { type ParamProps } from '@interfaces/ParamProps.interface'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { GetAllRecipesOneCategory } from '../../functions/GetAllRecipesOneCategory'

type Props = {
	searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({
	searchParams,
}: Props): Promise<Metadata> {
	const name = searchParams.name
	return {
		title: `Categoria•${name}`,
	}
}

const CategoryPage = async ({ params }: ParamProps) => {
	const recipes = await GetAllRecipesOneCategory(params.id)

	if (recipes === undefined) {
		notFound()
	}
	return (
		<>
			<DynamicTitle message="Recetas de la categoria " />
			<section className="mx-auto container">
				{Array.isArray(recipes?.data) ? (
					<section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:px-20 px-4 mt-20">
						{recipes?.data.map(
							({ _id, name, image, duration, portions, country }) => (
								<ShowOneRecipe id={_id} key={_id}>
									<CardRecipe
										name={name}
										img={image}
										category={country?.name}
										duration={duration}
										portions={portions}
									/>
								</ShowOneRecipe>
							),
						)}
					</section>
				) : (
					<NotFound description={recipes?.message} />
				)}
			</section>
		</>
	)
}

export default CategoryPage
