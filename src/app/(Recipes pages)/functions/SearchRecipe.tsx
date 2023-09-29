import { type Recipes } from '@interfaces/Recipes.interface'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export async function SearchRecipe (name: string) {
  try {
    const response = await fetch(`${baseUrl}/recipes/search?name=${name}`)
    if (!response.ok) {
      throw new Error('Error al obtener  la receta')
    }
    const data: Recipes[] = await response.json()
    if(Array.isArray(data)){
      return data
    }
    return [] 
  } catch (error) {
    console.log(error)
  }
}