import { type RecipeList } from '@/interfaces/RecipesList.interface'
import { baseUrl } from '@/lib/utils'

interface ApiResponse extends RecipeList {
	message?: string
}

/**
 * @description Obtiene una lista de recetas de una categoría específica desde el servidor con paginación.
 * @param id - El identificador de la categoría de la que se desean obtener las recetas.
 * @returns Una promesa que resuelve en una respuesta que incluye una lista de recetas (RecipeList) y un mensaje opcional, o undefined en caso de error.
 */

export async function GetAllRecipesOneCategory(
	id: string,
): Promise<ApiResponse | undefined> {
	try {
		const response = await fetch(
			`${baseUrl}/recipes/filter/categories?CategoryId=${id}&page=1&limit=10`,
		)
		if (!response.ok) {
			throw new Error('Error al obtener las recetas de una categoria')
		}
		const data: ApiResponse = await response.json()

		return data
	} catch (error) {
		console.error(error)
	}
}
