import { GetAllCategories } from "../functions/GetAllCategories";
import Carusel from "./Carusel";
import ShowRecipeOneCategory from "./ShowRecipeOneCategory";
import Image from "@/globalComponents/Image";
const Carousel = async () => {
  const Categories = await GetAllCategories();

  return (
    <section className="mt-32 lg:mx-20 mx-4 my-10">
      <h2 className="Subtitle">Explora nuestras categorias</h2>
      <Carusel>
        {Categories?.map(({ _id, image, name }) => (
          <ShowRecipeOneCategory id={_id} key={_id}>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image
              url={image}
              name={name}
              width={270}
              height={300}
              customStyles="hover:scale-105 transition-all"
            />
            <span className="text-lg text-slate-700 font-rubik block py-1">
              {name}{" "}
            </span>
          </ShowRecipeOneCategory>
        ))}
      </Carusel>
    </section>
  );
};

export default Carousel;
