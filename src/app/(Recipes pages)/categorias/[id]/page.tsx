import ShowOneRecipe from "@/globalComponents/ShowOneRecipe";
import { GetAllRecipesOfOneCategory } from "../../functions/GetAllRecipesOfOneCategory";
import { ParamProps } from "@interfaces/ParamProps.interface";
import Image from "@/globalComponents/Image";
import CardRecipe from "@/globalComponents/CardRecipe";
const page = async ({ params }: ParamProps) => {
  const recipes = await GetAllRecipesOfOneCategory(params.id);

  return (
    <section className="grid grid-cols-3 gap-5 lg:px-20 px-4 mt-20">
      {Array.isArray(recipes) ? (
        recipes.map(({ _id, name, image }) => (
          <ShowOneRecipe id={_id} key={_id}>
            <CardRecipe name={name} img={image} />
          </ShowOneRecipe>
        ))
      ) : (
        <span>{recipes?.message}</span>
      )}
    </section>
  );
};

export default page;
