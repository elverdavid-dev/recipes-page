import SidebarLatestRecipes from '@/components/recipes/details/sidebar-latest-recipes'
import RecipeDetail from '@/components/recipes/details/recipe-detail'
import RecipesSidebarSkeleton from '@/components/recipes/details/skeletons/recipes-sidebar-skeleton'
import RecipeDetailSkeleton from '@/components/recipes/details/skeletons/recipe-detail-skeleton'
import { getRecipeBySlug } from '@/services/recipes/get-recipes-by-slug'
import type { SlugProps } from '@/types/common/slug-props'
import type { Metadata } from 'next'
import { Suspense } from 'react'

export async function generateMetadata({
	params,
}: SlugProps): Promise<Metadata> {
	const slug = params.slug
	const recipe = await getRecipeBySlug(slug)
	// metadata of the page 404 not found
	if (!recipe) {
		return {
			title: '¡Oops! Algo salió mal.',
			description: 'La pagina no se ha encontrado!',
		}
	}
	//
	return {
		title: `Cómo Hacer ${recipe?.name} | GlobalFood`,
		description: recipe?.description,
		category: recipe.category.name,
		alternates: {
			canonical: `https://www.globalfood.site/recetas/${recipe.slug}`,
		},
		openGraph: {
			title: `Cómo Hacer ${recipe?.name} | GlobalFood`,
			description: recipe?.description,
			images: recipe?.image,
		},
		twitter: {
			title: `Cómo Hacer ${recipe?.name} | GlobalFood`,
			description: recipe?.description,
			images: recipe?.image,
		},
	}
}

const RecipeDetailPage = async ({ params }: SlugProps) => {
	const slug = params.slug
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
