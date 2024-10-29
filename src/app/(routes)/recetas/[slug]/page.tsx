import RecipeDetail from '@/components/recipes/details/recipe-detail'
import SidebarLatestRecipes from '@/components/recipes/details/sidebar-latest-recipes'
import RecipeDetailSkeleton from '@/components/recipes/details/skeletons/recipe-detail-skeleton'
import RecipesSidebarSkeleton from '@/components/recipes/details/skeletons/recipes-sidebar-skeleton'
import { getRecipeBySlug } from '@/services/recipes/get-recipes-by-slug'
import { createMetadata } from '@/utils/common/create-metadata'
import { Suspense } from 'react'

interface Props {
	params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
	const { slug } = await params
	const recipe = await getRecipeBySlug(slug)
	// metadata of the page 404 not found
	if (!recipe) {
		return {
			title: '¡Oops! Algo salió mal.',
			description: 'La pagina no se ha encontrado!',
		}
	}
	return createMetadata({
		title: `Como hacer ${recipe.name}`,
		description: recipe.description,
		canonicalUrl: `recetas/${recipe.slug}`,
		ogImg: recipe.image,
		category: recipe.category.name,
	})
}

const RecipeDetailPage = async ({ params }: Props) => {
	const { slug } = await params
	return (
		<>
			<section className="container px-2 md:px-8 lg:px-10  mx-auto mt-16 lg:flex lg:justify-between gap-x-16">
				<Suspense fallback={<RecipeDetailSkeleton />}>
					<RecipeDetail slug={slug} />
				</Suspense>
				<Suspense fallback={<RecipesSidebarSkeleton />}>
					<SidebarLatestRecipes />
				</Suspense>
			</section>
		</>
	)
}

export default RecipeDetailPage
