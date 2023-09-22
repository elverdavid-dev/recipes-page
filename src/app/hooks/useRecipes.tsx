'use client'

import { Recipes } from '@/interfaces/Recipes.interface'
import { useEffect, useState } from 'react'

export default function useRecipes(initialData: Recipes[]) {
  const [value, setValue] = useState('')
  const [recipes, setRecipes] = useState<Recipes[]>(initialData || [])
  useEffect(() => {
    // Create a new variable that contains the initial data filtered with the value passed from the input
    const filterRecipes = initialData.filter(({ name }) =>
      name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );

    // If the input value is empty, set the recipes to the initial data
    if (value === '') {
      setRecipes(initialData);
      return;
    }
    // Set the recipes to the filtered data if it exists, otherwise set the recipes to an empty array
    const newValue = filterRecipes.length !== 0 ? filterRecipes : []
    setRecipes(newValue);
  }, [value]);
  
  return {
    valueSearched: value,
    handleValue: setValue,
    recipes
  }
}
