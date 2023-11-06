import { type Recipes } from "@/interfaces/Recipes.interface"
import { baseUrl } from "@/lib/utils"

/**
 * @description Obtiene una lista de recetas de un país específico desde el servidor.
 * @param id - El identificador del país del que se desean obtener las recetas.
 * @returns Una promesa que resuelve en una lista de recetas (Recipes) o muestra un error en la consola en caso de fallo.
 */

export async function GetAllRecipesOneCountry(id: string) {
	try {
		const response = await fetch(
			`${baseUrl}/recipes/filter/countrys?countryId=${id}`,
		)
		if (!response.ok) {
			throw new Error("Error al obtener todas las recetas de 1 pais")
		}
		const data: Recipes[] = await response.json()

		return data
	} catch (error) {
		console.error(error)
	}
}
