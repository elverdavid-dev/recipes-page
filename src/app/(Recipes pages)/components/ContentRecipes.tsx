import ShowOneRecipe from "@/globalComponents/ShowOneRecipe";
import { GetAllRecipes } from "../functions/GetAllRecipes";
import PaginationComponent from "./Pagination";
import Image from "@/globalComponents/Image";
const ContentRecipes = async () => {
  const data = await GetAllRecipes();
  const initialPage = data?.page || 1;
  const total = data?.totalPages || 1;
  console.log(data);
  return (
    <>
      <div className="flex items-center justify-between px-5">
        <h2 className="Subtitle">Recetas</h2>
        <span className="text-lg font-rubik px-10">
          Total de recetas {data?.totalRecipes}{" "}
        </span>
      </div>
      <section className="mt-16 lg:mx-16 mx-4 grid grid-cols-4 gap-5">
        {!data ? (
          <span>Cargando...</span>
        ) : (
          data?.data.map(({ _id, image, name }) => (
            <div key={_id}>
              <ShowOneRecipe id={_id}>
                <Image url={image} name={name} width={300} height={300} />
                <span>{name} </span>
              </ShowOneRecipe>
            </div>
          ))
        )}
      </section>
      <PaginationComponent initialPage={initialPage} total={total} />
    </>
  );
};

export default ContentRecipes;
