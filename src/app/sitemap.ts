import { MetadataRoute } from 'next'
import { GetAllRecipes } from './(Recipes pages)/functions/GetAllRecipes'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const getAllRecipesRecursive = async () => {
    const dataRecipes = await GetAllRecipes()
    return dataRecipes?.data || []
  }

  const AllRecipes = await getAllRecipesRecursive()

  const dinamyRoutes = AllRecipes.map(({ _id }) => ({
    url: `https://www.globalfood.site/recetas/${_id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9
  }))

  return [
    {
      url: 'https://www.globalfood.site/',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1
    },
    {
      url: 'https://www.globalfood.site/recetas',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8
    },
    {
      url: 'https://www.globalfood.site/paises',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7
    },
    ...dinamyRoutes
  ]
}
