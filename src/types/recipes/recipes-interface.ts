import type { Categories } from '@/types/categories/categories-interface'
import type { Countries } from '@/types/countries/countries-interface'

export interface Recipes {
  _id: string
  name: string
  description: string
  ingredients: string[]
  steps: string[]
  category: Categories
  duration: number
  portions: number
  slug: string
  country?: Countries
  image: string
  createdAt: Date
  updatedAt: Date
}
