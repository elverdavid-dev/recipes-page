import { baseUrl } from '@/libs/common/config'
import type { CountriesData } from '@/types/countries/countries-interface'

export const getAllCountries = async (limit?: number) => {
	try {
		const response = await fetch(`${baseUrl}/countrys`, {
			next: { revalidate: 60 },
		})
		if (!response.ok) {
			throw new Error('Error a el obtener todas las recetas de un pais')
		}
		const data: CountriesData = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}
