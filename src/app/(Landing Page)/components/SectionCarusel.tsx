import { GetAllCategories } from "../functions/GetAllCategories";
import Carusel from "./Carusel";

const Carousel = async () => {
  const data = await GetAllCategories();
  console.log(data);
  return (
    <section className="mt-32 lg:mx-10 mx-4 my-10">
      <h2 className="Subtitle">Categorias</h2>
      <Carusel>
        {data?.map(({ _id, image, name }) => (
          <div key={_id}>
            <img
              src={image}
              alt={name}
              width="200"
              height="200"
              className="rounded-md"
            />
            <span>{name} </span>
          </div>
        ))}
      </Carusel>
    </section>
  );
};

export default Carousel;
