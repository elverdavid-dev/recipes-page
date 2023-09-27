import { type RecipeList } from '@/interfaces/RecipesList.interface'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

interface ApiResponse extends RecipeList {
  message?: string
}
<<<<<<< HEAD:src/app/(Recipes pages)/functions/GetAllRecipesOneCategory.ts
export async function GetAllRecipesOneCategory(id: string) {
=======
export async function GetAllRecipesOfOneCategory (id: string) {
>>>>>>> 818af621508f64d2176f53ad905cd99dd79769bf:src/app/(Recipes pages)/functions/GetAllRecipesOfOneCategory.ts
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
