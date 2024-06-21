import CardRecipe from '@/components/shared/CardRecipe'
import DynamicTitle from '@/components/shared/DynamicTitle'
import NotFound from '@/components/shared/NotFound'
import { getRecipesByCategory } from '@/services/recipes/get-recipes-by-category'
import type { ParamProps } from '@/types/common/param-props'
import type { Metadata } from 'next'
import Link from 'next/link'
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
	const recipes = await getRecipesByCategory(params.id)
	if (recipes === undefined) {
		notFound()
	}
	return (
		<>
			<DynamicTitle message="Recetas de la categoria " />
			<section className="mx-auto container">
				{recipes.message ? (
					<NotFound description={recipes?.message} />
				) : (
					<section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 gap-2 lg:px-16 px-2 mt-20">
						{recipes?.data.map(
							({ _id, name, image, duration, portions, country, slug }) => (
								<Link href={`/recetas/${slug}`} key={_id}>
									<CardRecipe
										name={name}
										img={image}
										category={country?.name}
										duration={duration}
										portions={portions}
									/>
								</Link>
							),
						)}
					</section>
				)}
			</section>
		</>
	)
}

export default CategoryPage
