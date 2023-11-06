import { type Recipes } from "./Recipes.interface"

export interface RecipeList {
	page: number
	totalPages: number
	totalItems: number
	data: Recipes[]
}
