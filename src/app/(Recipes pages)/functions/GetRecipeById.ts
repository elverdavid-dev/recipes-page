import { type Recipes } from '@interfaces/Recipes.interface'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export async function GetRecipeById (id: string) {
  try {
    const response = await fetch(`${baseUrl}/recipes/${id}`)
    if (!response.ok) {
      throw new Error('Error al obtener  la receta')
    }
    const data: Recipes = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
