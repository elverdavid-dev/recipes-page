import { type Recipes } from '@/interfaces/Recipes.interface'
import { baseUrl } from '@/lib/utils'

export async function GetAllRecipesOneCountry(id: string) {
  try {
    const response = await fetch(
      `${baseUrl}/recipes/filter/countrys?countryId=${id}`
    )
    if (!response.ok) {
      throw new Error('Error al obtener todas las recetas de 1 pais')
    }
    const data: Recipes[] = await response.json()

    return data
  } catch (error) {
    console.log(error)
  }
}
