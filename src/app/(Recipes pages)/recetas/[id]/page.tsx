import { GetRecipeById } from '@app/(Recipes pages)/functions/GetRecipeById'
import { type ParamProps } from '@interfaces/ParamProps.interface'
import { Metadata } from 'next'
import { Suspense } from 'react'
import Aside from '../components/oneRecipe/AsideSection'
import ShowDataRecipe from '../components/oneRecipe/ShowDataRecipe'
import SkeletonAsideSection from '../components/oneRecipe/skeletons/SkeletonAsideSection'
import SkeletonOneRecipe from '../components/oneRecipe/skeletons/SkeletonOneRecipe'

export async function generateMetadata({
	params,
}: ParamProps): Promise<Metadata> {
	const id = params.id
	const recipe = await GetRecipeById(id)
	return {
		title: `Cómo Hacer ${recipe?.name} | GlobalFood`,
		description: recipe?.description,
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

const PageById = async ({ params }: ParamProps) => {
	const id = params.id

	return (
		<>
			<section className="container px-2 md:px-8 lg:px-10  mx-auto mt-16 lg:flex lg:justify-between gap-x-16">
				<Suspense fallback={<SkeletonOneRecipe />}>
					<ShowDataRecipe id={id} />
				</Suspense>
				<Suspense fallback={<SkeletonAsideSection />}>
					<Aside />
				</Suspense>
			</section>
		</>
	)
}

export default PageById
