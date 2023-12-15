import { GetAllRecipesOneCountry } from '@/(Recipes pages)/functions/GetAllRecipesOneCountry'
import CardRecipe from '@/components/shared/CardRecipe'
import DynamicTitle from '@/components/shared/DynamicTitle'
import NotFound from '@/components/shared/NotFound'
import ShowOneRecipe from '@/components/shared/ShowOneRecipe'
import { type ParamProps } from '@/interfaces/ParamProps.interface'
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
								({ _id, image, name, category, portions, duration }) => (
									<section key={_id}>
										<ShowOneRecipe id={_id}>
											<CardRecipe
												name={name}
												img={image}
												category={category.name}
												duration={duration}
												portions={portions}
											/>
										</ShowOneRecipe>
									</section>
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
