import CardRecipe from '@/components/shared/CardRecipe'
import NotFound from '@/components/shared/NotFound'
import BackButton from '@/components/shared/common/back-button'
import { getRecipesByCategory } from '@/services/recipes/get-recipes-by-category'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type SearchParamsProps = {
	searchParams: { [key: string]: string | string[] | undefined }
}
interface Props extends SearchParamsProps {
	params: { id: string }
}
export async function generateMetadata({
	searchParams,
}: SearchParamsProps): Promise<Metadata> {
	return {
		title: `Recetas de la categoría ${searchParams.name} | GlobalFood`,
	}
}

const CategoryRecipesPage = async ({ params, searchParams }: Props) => {
	const recipes = await getRecipesByCategory(params.id)
	if (!recipes) {
		notFound()
	}
	return (
		<>
			<section className="2xl:mx-auto 2xl:container px-2 md:px-4 lg:px-16 mt-10">
				<BackButton label={searchParams.name} href="/" />
				{recipes.message ? (
					<NotFound description={recipes?.message} />
				) : (
					<section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 gap-2 px-2 mt-10">
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

export default CategoryRecipesPage
