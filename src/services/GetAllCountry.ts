import { type CountryData } from '@/interfaces/Country.interface'
import { baseUrl } from '@/libs/utils'

/**
 * @description Obtiene una lista de datos de países desde el servidor con paginación.
 * @returns Una promesa que resuelve en una lista de datos de países (CountryData) o muestra un error en la consola en caso de fallo.
 */

export async function GetAllCountry(limit?: number) {
	try {
		const response = await fetch(`${baseUrl}/countrys?page=1&limit=${limit}`)
		if (!response.ok) {
			throw new Error('Error a el obtener todas las recetas de un pais')
		}
		const data: CountryData = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}
