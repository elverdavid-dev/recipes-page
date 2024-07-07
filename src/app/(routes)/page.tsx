import SectionCategories from '@/components/home/section-categories'
import SectionCountries from '@/components/home/section-countries'
import SectionHero from '@/components/home/section-hero'
import SectionRecipesLatest from '@/components/home/section-recipes-latest'
import CategoriesSkeleton from '@/components/home/skeletons/categories-skeleton'
import CountriesSkeleton from '@/components/home/skeletons/countries-skeleton'
import RecipesLatestSkeleton from '@/components/home/skeletons/recipes-latest-skeleton'
import { Suspense } from 'react'

const HomePage = async () => {
	return (
		<main>
			<SectionHero />
			<Suspense fallback={<CategoriesSkeleton/>}>
			<SectionCategories />
			</Suspense>
			<Suspense fallback={<CountriesSkeleton/>}>
			<SectionCountries />
			</Suspense>
			<Suspense fallback={<RecipesLatestSkeleton/>}>
			<SectionRecipesLatest />
			</Suspense>
		</main>
	)
}

export default HomePage
