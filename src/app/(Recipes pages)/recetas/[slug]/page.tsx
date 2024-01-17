import { GetRecipeById } from '@app/(Recipes pages)/functions/GetRecipeById'
import { SlugProps } from '@interfaces/SlugProps.interface'
import { Metadata } from 'next'
import { Suspense } from 'react'
import Aside from '../components/oneRecipe/AsideSection'
import ShowDataRecipe from '../components/oneRecipe/ShowDataRecipe'
import SkeletonAsideSection from '../components/oneRecipe/skeletons/SkeletonAsideSection'
import SkeletonOneRecipe from '../components/oneRecipe/skeletons/SkeletonOneRecipe'

export async function generateMetadata({
	params,
}: SlugProps): Promise<Metadata> {
	const slug = params.slug
	const recipe = await GetRecipeById(slug)
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

const PageById = async ({ params }: SlugProps) => {
	const slug = params.slug

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

export default PageById
