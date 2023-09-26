import Image from "@/globalComponents/Image";
import { GetAllRecipesOneCountry } from "../functions/GetAllCountry";
import RedirectPageCountry from "./RedirectPageCountry";

const SectionCountry = async () => {
  const countrys = await GetAllRecipesOneCountry();

  return (
    <section className="mt-32 lg:px-20 mx-4">
      <h2 className="Subtitle">Recetas de todo el mundo</h2>
      <section className="grid lg:grid-cols-3 justify-center gap-5">
        {countrys?.data.map(({ _id, image, name }) => (
          <div key={_id} className="border rounded-md">
            <Image name={name} url={image} width={400} height={300} />
            <div className="flex justify-between items-center py-4 px-4">
              <span>{name} </span>
              <p>32 recetas</p>
            </div>
          </div>
        ))}
      </section>
      <RedirectPageCountry />
    </section>
  );
};

export default SectionCountry;
