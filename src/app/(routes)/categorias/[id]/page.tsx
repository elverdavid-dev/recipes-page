import BackButton from '@/components/shared/common/back-button'
import NotFound from '@/components/shared/not-found-search'
import CardRecipe from '@/components/shared/recipes-card'
import { getRecipesByCategory } from '@/services/recipes/get-recipes-by-category'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface Props {
	params: Promise<{ id: string }>
	searchParams: Promise<{ name: string }>
}
export async function generateMetadata({
	searchParams,
}: Pick<Props, 'searchParams'>): Promise<Metadata> {
	const { name } = await searchParams
	return {
		title: `Recetas de la categoría ${name} | GlobalFood`,
	}
}

const CategoryRecipesPage = async ({ params, searchParams }: Props) => {
	const { id } = await params
	const { name } = await searchParams

	const recipes = await getRecipesByCategory(id)
	if (!recipes) {
		notFound()
	}
	return (
		<>
			<section className="2xl:mx-auto 2xl:container px-2 md:px-4 lg:px-16 mt-10">
				<BackButton label={name} href="/" />
				{recipes.message ? (
					<NotFound message={recipes?.message} />
				) : (
					<section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 gap-2 px-2 mt-10">
						{recipes?.data.map(
							({ _id, name, image, duration, portions, slug }) => (
								<Link href={`/recetas/${slug}`} key={_id}>
									<CardRecipe
										name={name}
										img={image}
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
