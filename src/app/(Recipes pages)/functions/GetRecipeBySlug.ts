import { type Recipes } from '@interfaces/Recipes.interface'
import { baseUrl } from '@libs/utils'

/**
 * @description Obtiene una receta específica por su slug desde el servidor.
 * @param slug - El identificador de la receta que se desea obtener.
 * @returns Una promesa que resuelve en una receta (Recipes) o muestra un error en la consola en caso de fallo.
 */

export async function GetRecipeBySlug(slug: string) {
	try {
		const response = await fetch(`${baseUrl}/recipes/${slug}`)
		if (!response.ok) {
			throw new Error('Error al obtener  la receta')
		}
		const data: Recipes = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}
