import CardRecipe from "@/SharedComponents/CardRecipe"
import DynamicTitle from "@/SharedComponents/DynamicTitle"
import NotFound from "@/SharedComponents/NotFound"
import ShowOneRecipe from "@/SharedComponents/ShowOneRecipe"
import { type ParamProps } from "@interfaces/ParamProps.interface"
import { notFound } from "next/navigation"
import { GetAllRecipesOneCategory } from "../../functions/GetAllRecipesOneCategory"

const CategoryPage = async ({ params }: ParamProps) => {
	const recipes = await GetAllRecipesOneCategory(params.id)

	if (recipes === undefined) {
		notFound()
	}
	return (
		<>
			<DynamicTitle message="Recetas de la categoria " />
			<section className="mx-auto container">
				{Array.isArray(recipes?.data) ? (
					<section className="grid grid-cols-3 gap-5 lg:px-20 px-4 mt-20">
						{recipes?.data.map(
							({ _id, name, image, duration, category, portions }) => (
								<ShowOneRecipe id={_id} key={_id}>
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
					<NotFound description={recipes?.message} />
				)}
			</section>
		</>
	)
}

export default CategoryPage
