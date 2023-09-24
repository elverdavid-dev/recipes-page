import ShowOneRecipe from "@/globalComponents/ShowOneRecipe";
import { GetAllRecipesOfOneCategory } from "../../functions/GetAllRecipesOfOneCategory";
import { ParamProps } from "@interfaces/ParamProps.interface";
import CardRecipe from "@/globalComponents/CardRecipe";
const page = async ({ params }: ParamProps) => {
  const recipes = await GetAllRecipesOfOneCategory(params.id);
  return (
    <section>
      {Array.isArray(recipes?.data) ? (
        <section className="grid grid-cols-3 gap-5 lg:px-20 px-4 mt-20">
          {recipes?.data.map(({ _id, name, image }) => (
            <ShowOneRecipe id={_id} key={_id}>
              <CardRecipe name={name} img={image} />
            </ShowOneRecipe>
          ))}
        </section>
      ) : (
        <span className="mt-10 text-lg flex justify-center">
          {recipes?.message}
        </span>
      )}
    </section>
  );
};

export default page;
