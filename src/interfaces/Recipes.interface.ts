import { type Categories } from '@interfaces/Categories.interface'
import { type Country } from '@interfaces/Country.interface'

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
  country?: Country
  image: string
  createdAt: string
  updatedAt: string
}
