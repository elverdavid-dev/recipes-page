import ShowOneRecipe from "@/globalComponents/ShowOneRecipe";
import { GetLatestRecipes } from "../functions/GetLatestRecipes";

const SectionRecipesLatest = async () => {
  const data = await GetLatestRecipes();

  return (
    <section className="mt-32 lg:mx-10 mx-4">
      <h2 className="Subtitle">Ultimas recetas</h2>
      <div className="grid lg:grid-cols-4 justify-items-center gap-y-5">
        {data?.map(({ _id, name, image }) => (
          <div
            key={_id}
            className="cursor-pointer bg-slate-200 w-[250px] shadow-md rounded-md pb-2"
          >
            <ShowOneRecipe id={_id}>
              <img
                src={image}
                alt={name}
                width="250"
                height="200"
                className="rounded-md w-auto mx-auto"
              />
              <span className="font-readexPro mt-4 block px-2">{name}</span>
            </ShowOneRecipe>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionRecipesLatest;
