import BackButton from '@/components/shared/common/back-button'
import NotFound from '@/components/shared/not-found-search'
import PaginateNavigation from '@/components/shared/paginate-navigation'
import CardRecipe from '@/components/shared/recipes-card'
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
				<span className="text-lg">
					<strong>{data?.totalItems ?? 0}</strong> Recetas totales
				</span>
			</div>
			<section>
				{data?.message ? (
					<NotFound message={`No se encontraron recetas para "${name}"`} />
				) : (
					<section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-3 gap-2 px-2 mt-10">
						{data?.data.map(
							({ _id, image, name, duration, portions, slug }) => (
								<Link href={`/recetas/${slug}`} key={_id}>
									<CardRecipe
										img={image}
										name={name}
										duration={duration}
										portions={portions}
									/>
								</Link>
							),
						)}
					</section>
				)}
			</section>
			<PaginateNavigation
				currentPage={data?.page ?? 1}
				total={data?.totalPages ?? 1}
			/>
		</section>
	)
}

export default ContentRecipes
