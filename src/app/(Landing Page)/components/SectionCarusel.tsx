import { GetAllCategories } from "../functions/GetAllCategories";
import Carusel from "./Carusel";
import ShowRecipeOneCategory from "./ShowRecipeOneCategory";

const Carousel = async () => {
  const data = await GetAllCategories();
  console.log(data);
  return (
    <section className="mt-32 lg:mx-10 mx-4 my-10">
      <h2 className="Subtitle">Categorias</h2>
      <Carusel>
        {data?.map(({ _id, image, name }) => (
          <ShowRecipeOneCategory id={_id} key={_id}>
            <img
              src={image}
              alt={name}
              width="200"
              height="200"
              className="rounded-md"
            />
            <span className="text-lg text-slate-950 font-rubik block py-1">
              {name}{" "}
            </span>
          </ShowRecipeOneCategory>
        ))}
      </Carusel>
    </section>
  );
};

export default Carousel;
