import SectionCategories from '@/components/home/sections/SectionCategories'
import SectionCountry from '@/components/home/sections/SectionCountry'
import SectionHero from '@/components/home/sections/SectionHero'
import SectionRecipesLatest from '@/components/home/sections/SectionRecipesLatest'
import CategorySkeleton from '@/components/home/skeletons/CategorySkeleton'
import CountrySkeleton from '@/components/home/skeletons/CountrySkeleton'
import RecipesLatestSkeleton from '@/components/home/skeletons/RecipesLatestSkeleton'
import { Suspense } from 'react'

const HomePage = async () => {
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
