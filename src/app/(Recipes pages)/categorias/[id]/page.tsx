import ShowOneRecipe from "@/ShowOneRecipe";
import { GetAllRecipesOfOneCategory } from "../../functions/GetAllRecipesOfOneCategory";

interface ParamProps {
  params: { id: string };
}
const page = async ({ params }: ParamProps) => {
  const recipes = await GetAllRecipesOfOneCategory(params.id);

  return (
    <section className="grid grid-cols-3">
      {Array.isArray(recipes) ? (
        recipes.map(({ _id, name, image }) => (
          <section key={_id}>
            <ShowOneRecipe id={_id}>
              <img src={image} alt={name} />
              <span>{name}</span>
            </ShowOneRecipe>
          </section>
        ))
      ) : (
        <span>{recipes?.message}</span>
      )}
    </section>
  );
};

export default page;
