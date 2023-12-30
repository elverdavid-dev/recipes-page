import Hero from '@/HomePage/components/Hero'
import SectionCategories from '@/HomePage/components/sections/SectionCategories'
import SectionCountry from '@/HomePage/components/sections/SectionCountry'
import SectionRecipesLatest from '@/HomePage/components/sections/SectionRecipesLatest'
import CategorySkeleton from '@/HomePage/components/skeletons/CategorySkeleton'
import CountrySkeleton from '@/HomePage/components/skeletons/CountrySkeleton'
import RecipesLatestSkeleton from '@/HomePage/components/skeletons/RecipesLatestSkeleton'
import { Suspense } from 'react'

const HomePage = () => {
	return (
		<main>
			<Hero />
			<Suspense fallback={<CategorySkeleton />}>
				<SectionCategories />
			</Suspense>
			<Suspense fallback={<CountrySkeleton />}>
				<SectionCountry />
			</Suspense>
			<Suspense fallback={<RecipesLatestSkeleton />}>
				<SectionRecipesLatest />
			</Suspense>
		</main>
	)
}

export default HomePage
