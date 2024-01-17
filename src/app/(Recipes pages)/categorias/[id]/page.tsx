import CardRecipe from '@/components/shared/CardRecipe'
import DynamicTitle from '@/components/shared/DynamicTitle'
import NotFound from '@/components/shared/NotFound'
import ShowOneRecipe from '@/components/shared/ShowOneRecipe'
import { type ParamProps } from '@/interfaces/ParamProps.interface'
import { GetAllRecipesOneCategory } from '@/services/GetAllRecipesOneCategory'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Props = {
	searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({
	searchParams,
}: Props): Promise<Metadata> {
	const name = searchParams.name
	return {
		title: `Recetas de la categoría ${name} | GlobalFood`,
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
					<section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 gap-2 lg:px-16 px-2 mt-20">
						{recipes?.data.map(
							({ _id, name, image, duration, portions, country, slug }) => (
								<ShowOneRecipe slug={slug} key={_id}>
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
