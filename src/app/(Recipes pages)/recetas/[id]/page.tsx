import { GetRecipeById } from "../../functions/GetRecipeById";
import { ParamProps } from "@interfaces/ParamProps.interface";
const PageById = async ({ params }: ParamProps) => {
  const recipe = await GetRecipeById(params.id);
  /* if (!recipe) {
    notFound();
  } */
  // const formattedCreatedAt = new Date(recipe.createdAt).toLocaleString();
  console.log(recipe);
  return (
    <section>
      {recipe === undefined ? (
        <span>Cargando...</span>
      ) : (
        <div key={recipe._id}>
          <img src={recipe.image} alt={recipe.name} />
          <span className="text-lg">{recipe.name} </span>
          <article>{recipe.description} </article>
          <ul className="mt-10 mx-5 list-disc list-outside marker:text-gold">
            {recipe.ingredients.map((ingredient, i) => (
              <li key={i + ingredient}>{ingredient}</li>
            ))}
          </ul>
          <ol className="mt-10 mx-10 list-decimal list-outside">
            {recipe.steps.map((step, i) => (
              <li key={i + step}>{step}</li>
            ))}
          </ol>
          <span>Categoria : {recipe.category.name} </span>
        </div>
      )}
    </section>
  );
};

export default PageById;
