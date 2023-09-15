import ShowOneRecipe from "@/globalComponents/ShowOneRecipe";
import { GetLatestRecipes } from "../functions/GetLatestRecipes";
import CardRecipe from './CardRecipe';

const SectionRecipesLatest = async () => {
  const data = await GetLatestRecipes();
  
  return (
    <section className="mt-32 lg:mx-10 mx-4">
      <h2 className="Subtitle">Ultimas recetas</h2>
      <div className="grid lg:grid-cols-4 justify-items-center gap-y-12 grid-cols-auto-fit gap-x-14">
        {data?.map(({ _id, name, image }) => (
          <div
            key={_id}
          >
            <ShowOneRecipe id={_id}>
              <CardRecipe img={image} name={name} />
            </ShowOneRecipe>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionRecipesLatest;
