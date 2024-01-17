import { type Recipes } from '@/interfaces/Recipes.interface'
import { baseUrl } from '@/libs/utils'

/**
 * @description Obtiene una lista de las recetas más recientes desde el servidor.
 * @returns Una promesa que resuelve en una lista de recetas (Recipes) o muestra un error en la consola en caso de fallo.
 */

export async function GetLatestRecipes(limit: number) {
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
