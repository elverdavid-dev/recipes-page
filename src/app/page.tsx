import Hero from '@/LandingPage/components/Hero'
import SectionCountry from '@/LandingPage/components/sections/SectionCountry'
import SectionRecipesLatest from '@/LandingPage/components/sections/SectionRecipesLatest'
import { Suspense } from 'react'
import SectionCategories from './LandingPage/components/sections/SectionCategories'
import CategorySkeleton from './LandingPage/components/skeletons/CategorySkeleton'
import CountrySkeleton from './LandingPage/components/skeletons/CountrySkeleton'
import RecipesLatestSkeleton from './LandingPage/components/skeletons/RecipesLatestSkeleton'

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
