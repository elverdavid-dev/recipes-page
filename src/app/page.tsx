import SectionCategories from "@/LandingPage/components/SectionCategories";
import Hero from "@/LandingPage/components/Hero";
import Navbar from "@/LandingPage/components/Navbar";
import SectionRecipesLatest from "@/LandingPage/components/SectionRecipesLatest";

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <SectionCategories />
      <SectionRecipesLatest />
    </main>
  );
};

export default HomePage;
