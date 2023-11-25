import Pagination from '@/SharedComponents/Pagination'
import { Metadata } from 'next'
import { GetAllRecipes } from '../functions/GetAllRecipes'
import { SearchRecipeByName } from '../functions/SearchRecipe'
import ContentRecipes from './components/allRecipes/ContentRecipes'
import Search from './components/allRecipes/Search'

export const metadata: Metadata = {
	title: 'Recetas•GlobalFood',
}

interface SearchProps {
	searchParams: { page?: string; name?: string }
}

const RecipesPage = async ({ searchParams }: SearchProps) => {
	const recipesData = await GetAllRecipes(Number(searchParams.page))

	const getDataSearch = async () => {
		if (searchParams.name) {
			const searchData = await SearchRecipeByName(searchParams.name)
			return searchData
		}
	}

	const dataSearch = await getDataSearch()
	const currentPage = searchParams.name ? dataSearch?.page : recipesData?.page
	const totalPages = searchParams.name
		? dataSearch?.totalPages
		: recipesData?.totalPages
	return (
		<main className="mx-auto container">
			<Search />
			<ContentRecipes data={searchParams.name ? dataSearch : recipesData} />
			<Pagination currentPage={currentPage ?? 1} total={totalPages ?? 1} />
		</main>
	)
}

export default RecipesPage
