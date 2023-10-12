import { baseUrl } from '@/lib/utils'
import { type Recipes } from '@interfaces/Recipes.interface'

/**
 * @description Obtiene una receta específica por su ID desde el servidor.
 * @param id - El identificador de la receta que se desea obtener.
 * @returns Una promesa que resuelve en una receta (Recipes) o muestra un error en la consola en caso de fallo.
 */

export async function GetRecipeById(id: string) {
  try {
    const response = await fetch(`${baseUrl}/recipes/${id}`, {
      next: { revalidate: 60 }
    })
    if (!response.ok) {
      throw new Error('Error al obtener  la receta')
    }
    const data: Recipes = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}
