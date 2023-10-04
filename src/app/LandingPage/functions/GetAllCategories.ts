import { baseUrl } from '@/lib/utils'
import { type Categories } from '@interfaces/Categories.interface'

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
