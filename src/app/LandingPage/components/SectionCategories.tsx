import { GetAllCategories } from "../functions/GetAllCategories";
import Carusel from "./Carusel";
import ShowRecipeOneCategory from "./ShowRecipeOneCategory";
import Image from "@/globalComponents/Image";

const SectionCategories = async () => {
  const Categories = await GetAllCategories();

  return (
    <section className="mt-32 px-4 lg:px-20 my-10">
      <h2 className="Subtitle">Explora nuestras categorias</h2>
      <Carusel>
        {Categories?.map(({ _id, image, name }) => (
          <ShowRecipeOneCategory id={_id} key={_id}>
            <section className="group">
              <Image
                url={image}
                name={name}
                width={280}
                height={210}
                customStyles="hover:scale-105 transition-all"
              />
              <span className="text-xl text-slate-950 font-inter block py-2 group-hover:text-gold transition-all ">
                {name}{" "}
              </span>
            </section>
          </ShowRecipeOneCategory>
        ))}
      </Carusel>
    </section>
  );
};

export default SectionCategories;
