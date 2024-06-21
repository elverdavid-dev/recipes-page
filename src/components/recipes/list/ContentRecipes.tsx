import CardRecipe from '@/components/shared/CardRecipe'
import NotFound from '@/components/shared/NotFound'
import UiPagination from '@/components/shared/Pagination'
import Subtitle from '@/components/shared/Subtitle'
import { getAllRecipes } from '@/services/recipes/get-all-recipes'
import { searchRecipeByName } from '@/services/recipes/search-recipe-by-name'
import Link from 'next/link'

const ContentRecipes = async ({
	page,
	name,
}: { name?: string; page?: string }) => {
	const recipesData = await getAllRecipes(Number(page), 20)

	const getDataSearch = async () => {
		if (name) {
			const searchData = await searchRecipeByName(name)
			return searchData
		}
	}

	const searchData = await getDataSearch()

	const data = name ? searchData : recipesData
	return (
		<>
			<div className="flex items-center justify-between px-2 md:px-4 lg:px-16">
				<Subtitle>Recetas</Subtitle>
				<span className="text-lg">{data?.totalItems ?? 0} Recetas totales</span>
			</div>
			<section>
				{data?.message ? (
					<NotFound description={data.message} />
				) : (
					<section className="mt-16 px-2 lg:px-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 gap-2">
						{data?.data.map(
							({ _id, image, name, category, duration, portions, slug }) => (
								<Link href={`/recetas/${slug}`} key={_id}>
									<CardRecipe
										img={image}
										name={name}
										category={category.name}
										duration={duration}
										portions={portions}
									/>
								</Link>
							),
						)}
					</section>
				)}
			</section>
			<UiPagination
				currentPage={data?.page ?? 1}
				total={data?.totalPages ?? 1}
			/>
		</>
	)
}

export default ContentRecipes
