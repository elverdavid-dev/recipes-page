import { SearchRecipeByName } from '@/(Recipes pages)/functions/SearchRecipe'
import { type RecipeList } from '@/interfaces/RecipesList.interface'
import { useEffect, useState } from 'react'

interface Props {
  data: RecipeList | undefined
}
const useRecipes2 = ({ data }: Props) => {
  const initialData = data?.data ?? []
  const page = data?.page ?? 1
  // States
  const [recipesData, setRecipesData] = useState(initialData)
  // const [currentPage, setCurrentPage] = useState(page)
  console.log(page)
  // Functions
  const findRecipeByName = async (name: string) => {
    if (name === '') {
      setRecipesData(initialData)
    } else {
      const data = await SearchRecipeByName(name)
      setRecipesData(data ?? [])
      console.log(data)
    }
  }

  // Effects
  useEffect(() => {}, [recipesData, recipesData.length])
  return { recipesData, findRecipeByName }
}

export default useRecipes2
