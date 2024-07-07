import { baseUrl } from '@/libs/common/config'
import type { Categories } from '@/types/categories/categories-interface'

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
