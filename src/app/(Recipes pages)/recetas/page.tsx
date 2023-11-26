import { Metadata } from 'next'
import { Suspense } from 'react'
import ContentRecipes from './components/allRecipes/ContentRecipes'
import Search from './components/allRecipes/Search'
import Skeleton from './components/allRecipes/Skeleton'

export const metadata: Metadata = {
	title: 'Recetas•GlobalFood',
}

interface SearchProps {
	searchParams: { page?: string; name?: string }
}

const RecipesPage = async ({ searchParams }: SearchProps) => {
	return (
		<main className="mx-auto container">
			<Search />
			<Suspense key={searchParams.name} fallback={<Skeleton />}>
				<ContentRecipes page={searchParams.page} name={searchParams.name} />
			</Suspense>
		</main>
	)
}

export default RecipesPage
