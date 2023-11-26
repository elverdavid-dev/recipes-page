import Hero from '@/LandingPage/components/Hero'
import SectionCategories from '@/LandingPage/components/sections/SectionCategories'
import SectionCountry from '@/LandingPage/components/sections/SectionCountry'
import SectionRecipesLatest from '@/LandingPage/components/sections/SectionRecipesLatest'
import { Suspense } from 'react'
import RecipesLatestSkeleton from './LandingPage/components/skeletons/RecipesLatestSkeleton'

const HomePage = () => {
	return (
		<main>
			<Hero />
			<SectionCategories />
			<SectionCountry />
			<Suspense fallback={<RecipesLatestSkeleton />}>
				<SectionRecipesLatest />
			</Suspense>
		</main>
	)
}

export default HomePage
