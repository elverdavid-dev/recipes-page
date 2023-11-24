import Hero from '@/LandingPage/components/Hero'
import SectionCategories from '@/LandingPage/components/sections/SectionCategories'
import SectionCountry from '@/LandingPage/components/sections/SectionCountry'
import SectionRecipesLatest from '@/LandingPage/components/sections/SectionRecipesLatest'

const HomePage = () => {
	return (
		<main>
			<Hero />
			<SectionCategories />
			<SectionCountry />
			<SectionRecipesLatest />
		</main>
	)
}

export default HomePage
