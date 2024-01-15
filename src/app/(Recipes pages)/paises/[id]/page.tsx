import { GetAllRecipesOneCountry } from '@app/(Recipes pages)/functions/GetAllRecipesOneCountry'
import { type ParamProps } from '@interfaces/ParamProps.interface'
import CardRecipe from '@shared-components/shared/CardRecipe'
import DynamicTitle from '@shared-components/shared/DynamicTitle'
import NotFound from '@shared-components/shared/NotFound'
import ShowOneRecipe from '@shared-components/shared/ShowOneRecipe'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import SkeletonOneCountry from '../components/SkeletonOneCountry'

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
	const recipes = await GetAllRecipesOneCountry(id)
	if (recipes === undefined) {
		notFound()
	}
	return (
		<>
			<Suspense fallback={<SkeletonOneCountry />}>
				<DynamicTitle message="Recetas de " />
				<section className="2xl:mx-auto 2xl:container mt-16 lg:px-16 px-2">
					{Array.isArray(recipes) ? (
						<section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 gap-2">
							{recipes.map(
								({ _id, image, name, category, portions, duration, slug }) => (
									<ShowOneRecipe slug={slug} key={_id}>
										<CardRecipe
											name={name}
											img={image}
											category={category.name}
											duration={duration}
											portions={portions}
										/>
									</ShowOneRecipe>
								),
							)}
						</section>
					) : (
						<NotFound description="No hay recetas relacionadas a este pais" />
					)}
				</section>
			</Suspense>
		</>
	)
}

export default page
