import CardRecipe from '@/components/shared/recipes-card'
import Subtitle from '@/components/shared/common/subtitle'
import { getLatestRecipes } from '@/services/recipes/get-latest-recipes'
import Link from 'next/link'

const SectionRecipesLatest = async () => {
	const Recipes = await getLatestRecipes(12)

	return (
		<section className="mt-20 lg:px-16 px-2 2xl:container mx-auto">
			<Subtitle>Ultimas recetas</Subtitle>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-5">
				{Recipes?.map(
					({ _id, name, image, category, duration, portions, slug }) => (
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
			</div>
		</section>
	)
}

export default SectionRecipesLatest
