import { baseUrl } from '@/lib/utils'
import { type RecipeList } from '@interfaces/RecipesList.interface'

export async function GetAllRecipes (page = 1) {
  try {
    const response = await fetch(`${baseUrl}/recipes?page=${page}&limit=10`, {
      next: { revalidate: 60 }
    })
    if (!response.ok) {
      throw new Error('Error al obtener todas las recetas')
    }
    const data: RecipeList = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
