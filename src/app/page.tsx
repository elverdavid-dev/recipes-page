import Hero from '@/LandingPage/components/Hero'
import SectionCategories from '@/LandingPage/components/SectionCategories'
import SectionRecipesLatest from '@/LandingPage/components/SectionRecipesLatest'
import SectionCountry from './LandingPage/components/SectionCountry'

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
