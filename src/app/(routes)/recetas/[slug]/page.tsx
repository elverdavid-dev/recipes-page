import Aside from '@/components/recipes/details/AsideSection'
import ShowDataRecipe from '@/components/recipes/details/ShowDataRecipe'
import SkeletonAsideSection from '@/components/recipes/details/skeletons/SkeletonAsideSection'
import SkeletonOneRecipe from '@/components/recipes/details/skeletons/SkeletonOneRecipe'
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

const PageDetailsRecipe = async ({ params }: SlugProps) => {
	const slug = params.slug
	console.log(slug)
	return (
		<>
			<section className="container px-2 md:px-8 lg:px-10  mx-auto mt-16 lg:flex lg:justify-between gap-x-16">
				<Suspense fallback={<SkeletonOneRecipe />}>
					<ShowDataRecipe slug={slug} />
				</Suspense>
				<Suspense fallback={<SkeletonAsideSection />}>
					<Aside />
				</Suspense>
			</section>
		</>
	)
}

export default PageDetailsRecipe
