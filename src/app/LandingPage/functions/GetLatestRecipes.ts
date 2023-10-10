import { baseUrl } from '@/lib/utils'
import { type Recipes } from '@interfaces/Recipes.interface'

/**
 * @description Obtiene una lista de las recetas más recientes desde el servidor.
 * @returns Una promesa que resuelve en una lista de recetas (Recipes) o muestra un error en la consola en caso de fallo.
 */

export async function GetLatestRecipes() {
  try {
    const limit: number = 8
    const response = await fetch(`${baseUrl}/recipes/latest?limit=${limit}`, {
      next: { revalidate: 60 }
    })
    if (!response.ok) {
      throw new Error('Error al obtener las recetas')
    }
    const data: Recipes[] = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}
