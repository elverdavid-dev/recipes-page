import Hero from '@/LandingPage/components/Hero'
import SectionCategories from '@/LandingPage/components/SectionCategories'
import SectionCountry from '@/LandingPage/components/SectionCountry'
import SectionRecipesLatest from '@/LandingPage/components/SectionRecipesLatest'

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
