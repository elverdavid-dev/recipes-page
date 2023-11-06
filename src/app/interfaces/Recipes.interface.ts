import { type Categories } from "./Categories.interface"
import { type Country } from "./Cuntry.interface"

export interface Recipes {
	_id: string
	name: string
	description: string
	ingredients: string[]
	steps: string[]
	category: Categories
	duration: number
	portions: number
	country?: Country
	image: string
	createdAt: string
	updatedAt: string
}
