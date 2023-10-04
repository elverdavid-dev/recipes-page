import { type RecipeList } from '@/interfaces/RecipesList.interface'
import { baseUrl } from '@/lib/utils'

interface ApiResponse extends RecipeList {
  message?: string
}
export async function GetAllRecipesOneCategory(id: string) {
  try {
    const response = await fetch(
      `${baseUrl}/recipes/filter/categories?CategoryId=${id}&page=1&limit=10`
    )
    if (!response.ok) {
      throw new Error('Error al obtener las recetas de una categoria')
    }
    const data: ApiResponse = await response.json()

    return data
  } catch (error) {
    console.log(error)
  }
}
