import SectionCarusel from "./(Landing Page)/components/SectionCarusel";
import Hero from "./(Landing Page)/components/Hero";
import Navbar from "./(Landing Page)/components/Navbar";

import SectionRecipesLatest from "./(Landing Page)/components/SectionRecipesLatest";

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <SectionRecipesLatest />
      <SectionCarusel />
    </main>
  );
};

export default HomePage;
