import { Metadata } from 'next'
import { GetAllRecipes } from '../functions/GetAllRecipes'
import ContentRecipes from './components/allRecipes/ContentRecipes'

export const metadata: Metadata = {
	title: 'Recetas',
}

const RecipesPage = async () => {
	const data = await GetAllRecipes()
	return (
		<main className="mx-auto container">
			<ContentRecipes data={data} />
		</main>
	)
}

export default RecipesPage
