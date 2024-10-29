import type { RecipeList } from '@/types/recipes/recipes-list-interface'
import { baseUrl } from '@/utils/common/config'

/**
 *  Obtiene una lista de recetas desde el servidor con paginación.
 *
 * @param page - El número de página para la paginación (por defecto: 1).
 * @param limit - limite de recetas por pagina que se desea ver, por ejemplo 10 recetas por paginas, por defecto es 20
 * @returns Una promesa que resuelve en una lista de recetas (RecipeList) o undefined en caso de error.
 */

export const getAllRecipes = async (page = 1, limit?: number) => {
	try {
		const response = await fetch(
			`${baseUrl}/recipes?limit=${limit}&page=${page}`,
		)
		if (!response.ok) {
			throw new Error('Error al obtener todas las recetas')
		}
		const data: RecipeList = await response.json()
		return data
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message)
		}
	}
}
