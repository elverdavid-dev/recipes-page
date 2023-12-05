import { FormatRelativeDate } from '@/(Recipes pages)/functions/FormatRelativeDate'
import { GetRecipeById } from '@/(Recipes pages)/functions/GetRecipeById'
import CheckBoxComponent from '@/(Recipes pages)/recetas/components/oneRecipe/CheckBox'
import ChipComponent from '@/(Recipes pages)/recetas/components/oneRecipe/Chip'
import Image from '@/SharedComponents/Image'
import { notFound } from 'next/navigation'
import { FiList } from 'react-icons/fi'
import { Recipe, WithContext } from 'schema-dts'
import BreadcrumbsComponent from './Breadcrumbs'
import RecipeInfoTags from './RecipeInfoTags'

const ShowDataRecipe = async ({ id }: { id: string }) => {
	const recipe = await GetRecipeById(id)
	if (recipe === undefined) {
		notFound()
	}
	const fechaFormateada = FormatRelativeDate(recipe.createdAt)
	//duracion de la receta Representada en formato ISO 8601
	const timeISO = `PT${recipe.duration}M`;
	//Creación de datos estructurados JSON-LD para describir la receta y mejorar la indexación en motores de búsqueda
	const jsonLd: WithContext<Recipe> = {
		'@context': 'https://schema.org',
		'@type': 'Recipe',
		name: recipe.name,
		image: recipe.image,
		description: recipe.description,
		recipeCategory: `${recipe.category.name}`,
		prepTime: timeISO,
		cookTime: timeISO,
		recipeCuisine: recipe.country ? recipe.country.name : 'Cocina Internacional',
		datePublished: fechaFormateada,
		recipeYield: recipe.portions.toString(),
		recipeIngredient: recipe.ingredients,
		recipeInstructions: recipe.steps,
		keywords: [
			recipe.name,
			recipe.category.name,
			recipe.country ? recipe.country.name : 'Cocina Internacional',
			'Platos',
			'Receta',
			'Gastronomia',
			'Preparaciones',
		],
	}
	return (
		<section className="lg:w-[700px]">
			<BreadcrumbsComponent name={recipe.name} />
			<h2 className="font-readexPro text-lg text-gold">
				{recipe.country?.name}
			</h2>

			{/* Title */}

			<h1 className="font-lora text-3xl text-slate-900 py-3 capitalize">
				{recipe.name}
			</h1>

			{/* Image */}

			<Image src={recipe.image} alt={recipe.name} width={700} height={500} />

			{/* Tags */}

			<RecipeInfoTags
				fecha={fechaFormateada}
				category={recipe.category.name}
				duration={recipe.duration}
				portions={recipe.portions}
			/>

			{/* Description */}

			<article className="font-nunito text-lg  mt-10">
				{recipe.description}
			</article>

			{/* Ingredients */}

			<div className="mt-16 flex items-center gap-x-2">
				<FiList className="text-gold" size={32} />
				<h2 className="Subtitle">Ingredientes</h2>
			</div>
			<div className="flex flex-col font-nunito">
				{recipe.ingredients.map((recipe, i) => (
					<CheckBoxComponent key={i + recipe}>{recipe} </CheckBoxComponent>
				))}
			</div>

			{/* Steps */}

			<div className="mt-16 flex items-center gap-x-2">
				<FiList className="text-gold" size={32} />
				<h2 className="Subtitle">Pasos </h2>
			</div>
			<ul className="lg:mb-16">
				{recipe.steps.map((recipe, i) => (
					<li key={i + recipe} className="py-5">
						<ChipComponent>Paso {i + 1} </ChipComponent>
						<p className="pt-3 font-nunito text-lg">{recipe}</p>
					</li>
				))}
			</ul>
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
		</section>
	)
}

export default ShowDataRecipe
