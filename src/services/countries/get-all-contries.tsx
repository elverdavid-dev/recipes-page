import { baseUrl } from '@/libs/common/config'
import type { CountriesData } from '@/types/countries/countries-interface'

/**
 * @description Obtiene una lista de datos de países desde el servidor con paginación.
 * @returns Una promesa que resuelve en una lista de datos de países (CountriesData) o muestra un error en la consola en caso de fallo.
 */

export async function getAllCountries(limit?: number) {
	try {
		const response = await fetch(`${baseUrl}/countrys?limit=${limit}&page=1`)
		if (!response.ok) {
			throw new Error('Error a el obtener todas las recetas de un pais')
		}
		const data: CountriesData = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}
