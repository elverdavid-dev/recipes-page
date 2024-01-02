import { type Categories } from '@interfaces/Categories.interface'
import { baseUrl } from '@libs/utils'

/**
 * @description Obtiene una lista de categorías desde el servidor.
 * @returns Una promesa que resuelve en una lista de categorías (Categories) o muestra un error en la consola en caso de fallo.
 */
export async function GetAllCategories() {
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
