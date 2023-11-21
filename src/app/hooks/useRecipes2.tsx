import { SearchRecipeByName } from '@/(Recipes pages)/functions/SearchRecipe'
import { Recipes } from '@/interfaces/Recipes.interface'
import { type RecipeList } from '@/interfaces/RecipesList.interface'
import { useEffect, useState } from 'react'

interface Props {
	data: RecipeList | undefined
}
const useRecipes2 = ({ data }: Props) => {
	const initialData = data?.data ?? []
	const initialPage = data?.page ?? 1
	const itemaPerPage = data?.itemsPerPage ?? 20
	// States
	const [recipesData, setRecipesData] = useState<Recipes[]>(initialData)
	const [isLoader, setIsLoader] = useState(false)
	const [isFilteredData, setIsFilteredData] = useState(false)
	const [currentPage, setCurrentPage] = useState(initialPage)

	// Functions Search
	const handleLoader = () => {
		setIsLoader(!isLoader)
	}

	const findRecipeByName = async (name: string) => {
		if (name === '') {
			setIsFilteredData(false)
			setRecipesData(initialData)
		} else {
			setIsFilteredData(true)
			const data = await SearchRecipeByName(name)
			setRecipesData(data ?? [])
			setIsLoader(false)
			console.log(isLoader)
		}
	}

	// Effects
	useEffect(() => {
		if (isFilteredData) {
			const newValueOfPages =
				recipesData.length <= itemaPerPage
					? 1
					: Math.ceil(recipesData.length / itemaPerPage)
			setCurrentPage(newValueOfPages)
		}
	}, [recipesData])
	return {
		recipesData,
		findRecipeByName,
		isLoader,
		handleLoader,
		currentPage,
		isFilteredData,
		setCurrentPage
	}
}

export default useRecipes2
