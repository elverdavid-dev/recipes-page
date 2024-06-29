import { baseUrl } from '@/libs/common/config'
import type { Recipes } from '@/types/recipes/recipes-interface'

/**
 * @description Obtiene una receta específica por su slug desde el servidor.
 * @param slug - El identificador de la receta que se desea obtener.
 * @returns Una promesa que resuelve en una receta (Recipes) o muestra un error en la consola en caso de fallo.
 */

export const getRecipeBySlug = async (slug: string) => {
	try {
		const response = await fetch(`${baseUrl}/recipes/${slug}`)
		const data: Recipes = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}
