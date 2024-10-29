import type { Recipes } from '@/types/recipes/recipes-interface'
import { baseUrl } from '@/utils/common/config'

/**
 * @description Obtiene una lista de las recetas más recientes desde el servidor.
 * @returns Una promesa que resuelve en una lista de recetas (Recipes) o muestra un error en la consola en caso de fallo.
 */

export const getLatestRecipes = async (limit = 12) => {
	try {
		const response = await fetch(`${baseUrl}/recipes/latest?limit=${limit}`)
		if (!response.ok) {
			throw new Error('Error al obtener las recetas')
		}
		const data: Recipes[] = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}
