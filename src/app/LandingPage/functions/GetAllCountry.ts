import { type CountryData } from '@/interfaces/Cuntry.interface'
import { baseUrl } from '@/lib/utils'

/**
 * @description Obtiene todos los paises o regiones disponible de la base de datos
 */

export async function GetAllCountry() {
  try {
    const response = await fetch(`${baseUrl}/countrys?page=1&limit=10`, {
      next: { revalidate: 60 }
    })
    if (!response.ok) {
      throw new Error('Error a el obtener todas las recetas de un pais')
    }
    const data: CountryData = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
