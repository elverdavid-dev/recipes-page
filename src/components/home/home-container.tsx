import { getAllCategories } from '@/services/categories/get-all-categories'
import { getAllCountries } from '@/services/countries/get-all-contries'
import { getLatestRecipes } from '@/services/recipes/get-latest-recipes'
import SectionCategories from './section-categories'
import SectionCountries from './section-countries'
import SectionHero from './section-hero'
import SectionRecipesLatest from './section-recipes-latest'

const HomeContainer = async () => {
	const [categoriesResult, countriesResult, latestRecipesResult] =
		await Promise.allSettled([
			getAllCategories(),
			getAllCountries(6),
			getLatestRecipes(12),
		])

	const categoriesData =
		categoriesResult.status === 'fulfilled' ? categoriesResult.value : undefined
	const countriesData =
		countriesResult.status === 'fulfilled' ? countriesResult.value : undefined
	const latestRecipesData =
		latestRecipesResult.status === 'fulfilled'
			? latestRecipesResult.value
			: undefined

	return (
		<section>
			<SectionHero />
			<SectionCategories categories={categoriesData ?? []} />
			<SectionCountries countries={countriesData} />
			<SectionRecipesLatest recipes={latestRecipesData ?? []} />
		</section>
	)
}

export default HomeContainer
