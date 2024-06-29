import { baseUrl } from '@/libs/common/config'
import type { MessageResponse } from '@/types/common/message-response-interface'
import type { RecipeList } from '@/types/recipes/recipes-list-interface'

type ApiResponse = RecipeList & MessageResponse
/**
 * @description Obtiene una lista de recetas de una categoría específica desde el servidor con paginación.
 * @param id - El identificador de la categoría de la que se desean obtener las recetas.
 * @returns Una promesa que resuelve en una respuesta que incluye una lista de recetas (RecipeList) y un mensaje opcional, o undefined en caso de error.
 */

export const getRecipesByCategory = async (id: string) => {
	try {
		const response = await fetch(
			`${baseUrl}/recipes/filter/categories?CategoryId=${id}&page=1&limit=20`,
		)
		const data: ApiResponse = await response.json()

		return data
	} catch (error) {
		console.error(error)
	}
}
