import CardRecipe from '@shared-components/shared/CardRecipe'
import ShowOneRecipe from '@shared-components/shared/ShowOneRecipe'
import { GetLatestRecipes } from '../../functions/GetLatestRecipes'

const SectionRecipesLatest = async () => {
	const Recipes = await GetLatestRecipes(12)

	return (
		<section className="mt-32 lg:px-16 px-2 2xl:container mx-auto">
			<h2 className="Subtitle">Ultimas recetas</h2>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-5">
				{Recipes?.map(({ _id, name, image, category, duration, portions, slug }) => (
					<ShowOneRecipe slug={slug} key={_id}>
						<CardRecipe
							img={image}
							name={name}
							category={category.name}
							duration={duration}
							portions={portions}
						/>
					</ShowOneRecipe>
				))}
			</div>
		</section>
	)
}

export default SectionRecipesLatest
