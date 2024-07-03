import SectionCategories from '@/components/home/sections/SectionCategories'
import SectionCountry from '@/components/home/sections/SectionCountry'
import SectionHero from '@/components/home/sections/SectionHero'
import SectionRecipesLatest from '@/components/home/sections/SectionRecipesLatest'

const HomePage = async () => {
	return (
		<main>
			<SectionHero />
			<SectionCategories />
			<SectionCountry />
			<SectionRecipesLatest />
		</main>
	)
}

export default HomePage
