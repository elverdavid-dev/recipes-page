import { GetAllRecipes } from '@/(Recipes pages)/functions/GetAllRecipes'
import { SearchRecipeByName } from '@/(Recipes pages)/functions/SearchRecipe'
import CardRecipe from '@/SharedComponents/CardRecipe'
import NotFound from '@/SharedComponents/NotFound'
import Pagination from '@/SharedComponents/Pagination'
import ShowOneRecipe from '@/SharedComponents/ShowOneRecipe'

const ContentRecipes = async ({
	page,
	name,
}: { name?: string; page?: string }) => {
	const recipesData = await GetAllRecipes(Number(page) || 1)

	const getDataSearch = async () => {
		if (name) {
			const searchData = await SearchRecipeByName(name)
			return searchData
		}
	}

	const searchData = await getDataSearch()

	const data = name ? searchData : recipesData
	return (
		<>
			<div className="flex items-center justify-between px-5">
				<h2 className="Subtitle">Recetas</h2>
				<span className="text-lg font-nunito">
					{data?.totalItems ?? 0} Recetas totales
				</span>
			</div>
			<section>
				{data?.message ? (
					<NotFound description={data.message} />
				) : (
					<section className="mt-16 px-2 mx-auto  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 gap-2">
						{data?.data.map(
							({ _id, image, name, category, duration, portions }) => (
								<div key={_id}>
									<ShowOneRecipe id={_id}>
										<CardRecipe
											img={image}
											name={name}
											category={category.name}
											duration={duration}
											portions={portions}
										/>
									</ShowOneRecipe>
								</div>
							),
						)}
					</section>
				)}
			</section>
			<Pagination currentPage={data?.page ?? 1} total={data?.totalPages ?? 1} />
		</>
	)
}

export default ContentRecipes
