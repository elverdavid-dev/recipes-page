import type { RecipeList } from '@/interfaces/RecipesList.interface'
import { baseUrl } from '@/libs/utils'

interface Props extends RecipeList {
	message: string
}

/**
 * @description Busca recetas por nombre desde el servidor.
 * @param name - El nombre de la receta que se desea buscar.
 * @returns Una promesa que resuelve en una lista de recetas (Recipes) que coinciden con el nombre o un array vacío en caso de fallo o ausencia de resultados.
 */

export async function SearchRecipeByName(name: string) {
	try {
		const response = await fetch(`${baseUrl}/recipes/search?name=${name}`)
		if (!response.ok) {
			throw new Error('Error al obtener  la receta')
		}
		const data: Props = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}
