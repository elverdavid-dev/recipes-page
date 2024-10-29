import ContentRecipes from '@/components/recipes/list/content-recipes'
import RecipesSkeleton from '@/components/recipes/list/recipes-skeleton'
import { createMetadata } from '@/utils/common/create-metadata'
import { Suspense } from 'react'

export const metadata = createMetadata({
	title: 'Recetas del Mundo para Tu Paladar',
})

interface SearchProps {
	searchParams: Promise<{ page?: string; name?: string }>
}

const RecipesPage = async ({ searchParams }: SearchProps) => {
	const { name, page } = await searchParams
	const dinamyKey = `${name ?? 'key'}-${page ?? 1}`
	return (
		<main className="2xl:mx-auto 2xl:container px-2 md:px-4 lg:px-20 2xl:px-32 mt-10">
			<Suspense key={dinamyKey} fallback={<RecipesSkeleton />}>
				<ContentRecipes page={page} name={name} />
			</Suspense>
		</main>
	)
}

export default RecipesPage
