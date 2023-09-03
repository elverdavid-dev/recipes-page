import Hero from "./(Landing Page)/components/Hero";
import Navbar from "./(Landing Page)/components/Navbar";
import SectionCategory from "./(Landing Page)/components/SectionCategory";
import SectionRecipesLatest from "./(Landing Page)/components/SectionRecipesLatest";

const HomePage = () => {
	return (
		<main>
			<Navbar />
			<Hero />
			<SectionRecipesLatest />
			<SectionCategory />
		</main>
	);
};

export default HomePage;
