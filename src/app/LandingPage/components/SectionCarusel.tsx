import { GetAllCategories } from "../functions/GetAllCategories";
import Carusel from "./Carusel";
import ShowRecipeOneCategory from "./ShowRecipeOneCategory";
import Image from "@/globalComponents/Image";
const Carousel = async () => {
  const Categories = await GetAllCategories();
  console.log(Categories);
  return (
    <section className="mt-32 lg:mx-10 mx-4 my-10">
      <h2 className="Subtitle">Categorias</h2>
      <Carusel>
        {Categories?.map(({ _id, image, name }) => (
          <ShowRecipeOneCategory id={_id} key={_id}>
            <Image
              url={image}
              name={name}
              width={200}
              height={200}
              customStyles="rounded-md"
            />
            <span className="text-lg text-slate-950 font-rubik block py-1 ">
              {name}{" "}
            </span>
          </ShowRecipeOneCategory>
        ))}
      </Carusel>
    </section>
  );
};

export default Carousel;
