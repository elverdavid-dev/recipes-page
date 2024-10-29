import type { Categories } from '@/types/categories/categories-interface'
import { baseUrl } from '@/utils/common/config'

export const getAllCategories = async () => {
	try {
		const response = await fetch(`${baseUrl}/categories`)
		if (!response.ok) {
			throw Error('Error al obtener las categorias')
		}
		const data: Categories[] = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}
