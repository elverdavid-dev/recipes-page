import Image from "@/globalComponents/Image";
import { GetAllRecipesOneCountry } from "../functions/GetAllCountry";

const SectionCountry = async () => {
  const countrys = await GetAllRecipesOneCountry();

  return (
    <section className="mt-32 lg:px-20 mx-4">
      <h2 className="Subtitle">Recetas de todo el mundo</h2>
      <section className="grid lg:grid-cols-3 justify-center gap-5">
        {countrys?.data.map(({ _id, image, name }) => (
          <div key={_id}>
            <Image name={name} url={image} width={400} height={300} />
            <span>{name} </span>
          </div>
        ))}
      </section>
    </section>
  );
};

export default SectionCountry;
