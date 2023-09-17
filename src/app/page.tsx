import SectionCarusel from "@/LandingPage/components/SectionCarusel";
import Hero from "@/LandingPage/components/Hero";
import Navbar from "@/LandingPage/components/Navbar";
import SectionRecipesLatest from "@/LandingPage/components/SectionRecipesLatest";

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <SectionCarusel />
      <SectionRecipesLatest />
    </main>
  );
};

export default HomePage;
