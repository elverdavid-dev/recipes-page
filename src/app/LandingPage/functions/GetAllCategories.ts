import { type Categories } from '@interfaces/Categories.interface'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string

export async function GetAllCategories () {
  try {
    const response = await fetch(`${baseUrl}/categories`)
    if (!response.ok) {
      throw Error('Error al obtener las categorias')
    }
    const data: Categories[] = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
