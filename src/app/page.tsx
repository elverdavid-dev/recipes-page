import SectionCategories from '@/LandingPage/components/SectionCategories'
import Hero from '@/LandingPage/components/Hero'

import SectionRecipesLatest from '@/LandingPage/components/SectionRecipesLatest'

const HomePage = () => {
  return (
    <main>
      <Hero />
      <SectionCategories />
      <SectionRecipesLatest />
    </main>
  )
}

export default HomePage
