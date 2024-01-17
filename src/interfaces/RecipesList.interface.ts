import { type Recipes } from '@/interfaces/Recipes.interface'

export interface RecipeList {
	page: number
	totalPages: number
	itemsPerPage: number
	totalItems: number
	data: Recipes[]
	message?: string
}
