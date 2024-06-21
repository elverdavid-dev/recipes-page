import SkeletonOneCountry from '@/components/countries/SkeletonOneCountry'
import CardRecipe from '@/components/shared/CardRecipe'
import DynamicTitle from '@/components/shared/DynamicTitle'
import NotFound from '@/components/shared/NotFound'
import { getRecipesByCountry } from '@/services/recipes/get-recipes-by-country'
import type { ParamProps } from '@/types/common/param-props'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

type Props = {
	searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({
	searchParams,
}: Props): Promise<Metadata> {
	const name = searchParams.name
	return {
		title: `Explora Cocinas del Mundo | ${name} | GlobalFood`,
	}
}

const page = async ({ params }: ParamProps) => {
	const id = params.id
	const recipes = await getRecipesByCountry(id)
	if (recipes === undefined) {
		notFound()
	}
	return (
		<>
			<Suspense fallback={<SkeletonOneCountry />}>
				<DynamicTitle message="Recetas de " />
				<section className="2xl:mx-auto 2xl:container mt-16 lg:px-16 px-2">
					{recipes.message ? (
						<NotFound description={recipes.message} />
					) : (
						<section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 gap-2">
							{recipes.map(
								({ _id, image, name, category, portions, duration, slug }) => (
									<Link href={`/recetas/${slug}`} key={_id}>
										<CardRecipe
											name={name}
											img={image}
											category={category.name}
											duration={duration}
											portions={portions}
										/>
									</Link>
								),
							)}
						</section>
					)}
				</section>
			</Suspense>
		</>
	)
}

export default page
