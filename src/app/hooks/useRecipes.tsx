import { GetAllRecipes } from '@/(Recipes pages)/functions/GetAllRecipes'
import { SearchRecipe } from '@/(Recipes pages)/functions/SearchRecipe'
import { type Recipes } from '@/interfaces/Recipes.interface'
import { useEffect, useState } from 'react'

interface Props {
  initialData?: Recipes[]
  initialPage: number
  productsPerPage?: number
  countOfPages?: number
}

export default function useRecipes({
  initialData = [],
  initialPage,
  productsPerPage = 12,
  countOfPages = 1
}: Props) {
  const [recipes, setRecipes] = useState<Recipes[]>(initialData)
  const [currentPage, setCurrentPage] = useState(initialPage)
  const [isFilteredData, setIsFilteredData] = useState(false)
  const [totalPages, setTotalPages] = useState(countOfPages)

  const searchRecipeTyped = async (valueTyped: string) => {
    if (valueTyped === '') {
      setIsFilteredData(false)
      setRecipes(initialData)
    } else {
      setIsFilteredData(true)
      setCurrentPage(1)
      const data = await SearchRecipe(valueTyped)
      setRecipes(data ?? [])
    }
  }

  const updateRecipes = async () => {
    if (!isFilteredData) {
      const data = await GetAllRecipes(currentPage)
      setRecipes(data?.data ?? [])
    }
  }

  useEffect(() => {
    updateRecipes()
  }, [currentPage])

  useEffect(() => {
    if (isFilteredData) {
      const newValueOfPages = recipes.length <= productsPerPage ? 1 : Math.ceil(recipes.length / productsPerPage)
      setTotalPages(newValueOfPages)
    }
  }, [isFilteredData, recipes.length, productsPerPage]);

  return {
    recipes,
    currentPage,
    setCurrentPage,
    searchRecipeTyped,
    isFilteredData,
    totalPages
  }
}
