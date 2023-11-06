import { baseUrl } from '@/lib/utils'
import { type RecipeList } from '@interfaces/RecipesList.interface'

/**
 * @description Obtiene una lista de recetas desde el servidor con paginación.
 *
 * @param page - El número de página para la paginación (por defecto: 1).
 * @returns Una promesa que resuelve en una lista de recetas (RecipeList) o undefined en caso de error.
 */

export async function GetAllRecipes(page = 1): Promise<RecipeList | undefined> {
  try {
    const response = await fetch(`${baseUrl}/recipes?page=${page}&limit=20`)
    if (!response.ok) {
      throw new Error('Error al obtener todas las recetas')
    }
    const data: RecipeList = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}
