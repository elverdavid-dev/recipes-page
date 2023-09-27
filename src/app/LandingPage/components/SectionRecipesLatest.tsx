import CardRecipe from "@/globalComponents/CardRecipe";
import ShowOneRecipe from "@/globalComponents/ShowOneRecipe";
import { GetLatestRecipes } from "../functions/GetLatestRecipes";

const SectionRecipesLatest = async () => {
  const Recipes = await GetLatestRecipes()

  return (
    <section className="mt-32 lg:px-20 mx-4">
      <h2 className="Subtitle">Ultimas recetas</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-y-10 lg:gap-x-5">
        {Recipes?.map(({ _id, name, image }) => (
          <div key={_id}>
            <ShowOneRecipe id={_id}>
              <CardRecipe img={image} name={name} />
            </ShowOneRecipe>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SectionRecipesLatest
