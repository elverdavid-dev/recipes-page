import { baseUrl } from '@/lib/utils'
import { type Recipes } from '@interfaces/Recipes.interface'

export async function GetLatestRecipes () {
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
    console.log(error)
  }
}
