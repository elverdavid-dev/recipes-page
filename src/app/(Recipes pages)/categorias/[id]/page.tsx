import ShowOneRecipe from "@/globalComponents/ShowOneRecipe";
import { GetAllRecipesOfOneCategory } from "../../functions/GetAllRecipesOfOneCategory";
import { ParamProps } from "@interfaces/ParamProps.interface";
import Image from "@/globalComponents/Image";
const page = async ({ params }: ParamProps) => {
  const recipes = await GetAllRecipesOfOneCategory(params.id);

  return (
    <section className="grid grid-cols-3">
      {Array.isArray(recipes) ? (
        recipes.map(({ _id, name, image }) => (
          <section key={_id}>
            <ShowOneRecipe id={_id}>
              <Image url={image} name={name} width={400} height={300} />
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
