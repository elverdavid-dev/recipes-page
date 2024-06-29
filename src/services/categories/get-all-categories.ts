import { baseUrl } from '@/libs/common/config'
import type { Categories } from '@/types/categories/categories-interface'

export const getAllCategories = async () => {
	try {
		const response = await fetch(`${baseUrl}/categories`, {
			next: { revalidate: 30 },
		})
		if (!response.ok) {
			throw Error('Error al obtener las categorias')
		}
		return await response.json()
	} catch (error) {
		console.error(error)
	}
}
