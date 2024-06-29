import { getAllRecipes } from '@/services/recipes/get-all-recipes'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const getAllRecipesRecursive = async () => {
		const dataRecipes = await getAllRecipes()
		return dataRecipes?.data || []
	}

	const AllRecipes = await getAllRecipesRecursive()

	const dinamyRoutes = AllRecipes.map(({ slug, updatedAt }) => ({
		url: `https://www.globalfood.site/recetas/${slug}`,
		lastModified: updatedAt,
		changeFrequency: 'monthly' as const,
		priority: 0.9,
	}))

	return [
		{
			url: 'https://www.globalfood.site/',
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 1,
		},
		{
			url: 'https://www.globalfood.site/recetas',
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 0.8,
		},
		{
			url: 'https://www.globalfood.site/paises',
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 0.7,
		},
		...dinamyRoutes,
	]
}
