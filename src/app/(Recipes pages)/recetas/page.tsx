import { Metadata } from 'next'
import { Suspense } from 'react'
import ContentRecipes from './components/allRecipes/ContentRecipes'
import Search from './components/allRecipes/Search'
import SkeletonRecipe from './components/allRecipes/SkeletonRecipe'

export const metadata: Metadata = {
	title: 'Recetas del Mundo para Tu Paladar | GlobalFood',
}

interface SearchProps {
	searchParams: { page?: string; name?: string }
}

const RecipesPage = async ({ searchParams }: SearchProps) => {
	const name = searchParams.name ?? 'key'
	const page = searchParams.page ?? '1'
	const dinamyKey = name + page
	return (
		<main className="2xl:mx-auto 2xl:container">
			<Search />
			<Suspense key={dinamyKey} fallback={<SkeletonRecipe />}>
				<ContentRecipes page={searchParams.page} name={searchParams.name} />
			</Suspense>
		</main>
	)
}

export default RecipesPage
