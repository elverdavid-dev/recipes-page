import type { CountriesData } from '@/types/countries/countries-interface'
import { baseUrl } from '@/utils/common/config'

export const getAllCountries = async (limit?: number) => {
	try {
		const response = await fetch(`${baseUrl}/countries?limit=${limit}`)
		if (!response.ok) {
			throw new Error('Error a el obtener todas las recetas de un pais')
		}
		const data: CountriesData = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}
