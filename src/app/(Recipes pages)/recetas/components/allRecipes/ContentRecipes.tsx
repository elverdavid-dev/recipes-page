'use client'
import CardRecipe from '@/SharedComponents/CardRecipe'
import NotFound from '@/SharedComponents/NotFound'
import ShowOneRecipe from '@/SharedComponents/ShowOneRecipe'
import { type RecipeList } from '@/interfaces/RecipesList.interface'

const ContentRecipes = ({ data }: { data: RecipeList | undefined }) => {
	console.log(data)
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
					<section className="mt-16 px-4 mx-auto  grid grid-cols-2 lg:grid-cols-4 lg:gap-5 gap-3">
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
		</>
	)
}

export default ContentRecipes
