import SkeletonOneCountry from '@/components/countries/SkeletonOneCountry'
import CardRecipe from '@/components/shared/CardRecipe'
import NotFound from '@/components/shared/NotFound'
import BackButton from '@/components/shared/common/back-button'
import { getRecipesByCountry } from '@/services/recipes/get-recipes-by-country'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

type SearchParamsProps = {
	searchParams: { [key: string]: string | string[] | undefined }
}
interface Props extends SearchParamsProps {
	params: { id: string }
}

export async function generateMetadata({
	searchParams,
}: SearchParamsProps): Promise<Metadata> {
	const name = searchParams.name
	return {
		title: `Explora Cocinas del Mundo | ${name} | GlobalFood`,
	}
}

const CountryRecipesPage = async ({ params, searchParams }: Props) => {
	const id = params.id
	const recipes = await getRecipesByCountry(id)
	if (recipes === undefined) {
		notFound()
	}
	return (
		<>
			<Suspense fallback={<SkeletonOneCountry />}>
				<section className="2xl:mx-auto 2xl:container px-2 md:px-4 lg:px-16 mt-10">
					<BackButton label={searchParams.name} href="/paises" />
					{recipes.message ? (
						<NotFound description={recipes.message} />
					) : (
						<section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 gap-2 px-2 mt-10">
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

export default CountryRecipesPage
