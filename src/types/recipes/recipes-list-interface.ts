import type { Recipes } from '@/types/recipes/recipes-interface'

export interface RecipeList {
  page: number
  totalPages: number
  itemsPerPage: number
  totalItems: number
  data: Recipes[]
  message?: string
}
