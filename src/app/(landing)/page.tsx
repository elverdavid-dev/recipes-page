import { Suspense } from 'react'
import SectionCategories from './components/sections/SectionCategories'
import SectionCountry from './components/sections/SectionCountry'
import SectionHero from './components/sections/SectionHero'
import SectionRecipesLatest from './components/sections/SectionRecipesLatest'
import CategorySkeleton from './components/skeletons/CategorySkeleton'
import CountrySkeleton from './components/skeletons/CountrySkeleton'
import RecipesLatestSkeleton from './components/skeletons/RecipesLatestSkeleton'

const HomePage = () => {
	return (
		<main>
			<SectionHero />
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
