import { FormatRelativeDate } from '@app/(Recipes pages)/functions/FormatRelativeDate'
import { Recipes } from '@interfaces/Recipes.interface'
import { Recipe, WithContext } from 'schema-dts'

const GenerateJsonLD = (recipe: Recipes) => {
	const fechaFormateada = FormatRelativeDate(recipe.createdAt)
	//duracion de la receta Representada en formato ISO 8601
	const timeISO = `PT${recipe.duration}M`
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
		recipeCuisine: recipe.country
			? recipe.country.name
			: 'Cocina Internacional',
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

	return jsonLd
}

export default GenerateJsonLD
