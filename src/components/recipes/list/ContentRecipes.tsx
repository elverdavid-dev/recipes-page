import CardRecipe from '@/components/shared/CardRecipe'
import NotFound from '@/components/shared/NotFound'
import UiPagination from '@/components/shared/Pagination'
import BackButton from '@/components/shared/common/back-button'
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
		<section>
			<div className="flex items-center justify-between px-2 md:px-0">
				<BackButton label="Recetas" href="/" />
				<span className="text-lg text-gray-800">
					<strong>{data?.totalItems ?? 0}</strong> Recetas totales
				</span>
			</div>
			<section>
				{data?.message ? (
					<NotFound description={data.message} />
				) : (
					<section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 gap-2 px-2 mt-10">
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
		</section>
	)
}

export default ContentRecipes
