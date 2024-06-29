import ContentRecipes from '@/components/recipes/list/ContentRecipes'
import Search from '@/components/recipes/list/Search'
import SkeletonRecipe from '@/components/recipes/list/SkeletonRecipe'
import type { Metadata } from 'next'
import { Suspense } from 'react'

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
		<main className="2xl:mx-auto 2xl:container px-2 md:px-4 lg:px-16 mt-10">
			<Suspense key={dinamyKey} fallback={<SkeletonRecipe />}>
				<ContentRecipes page={searchParams.page} name={searchParams.name} />
			</Suspense>
		</main>
	)
}

export default RecipesPage
