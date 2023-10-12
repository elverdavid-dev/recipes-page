import Image from '@/globalComponents/Image'
import { GetAllCountry } from '../functions/GetAllCountry'
import RedirectPageCountry from './RedirectPageCountry'
import ShowRecipesOneCountry from './ShowRecipesOneCountry'

const SectionCountry = async () => {
  const countrys = await GetAllCountry()

  return (
    <section className="mt-32 lg:px-20 py-4 2xl:container mx-auto">
      <h2 className="Subtitle">Recetas de todo el mundo</h2>
      <section className="grid lg:grid-cols-3 justify-center gap-5">
        {countrys?.data.map(({ _id, image, name }) => (
          <ShowRecipesOneCountry key={_id} id={_id}>
            <div className="relative group">
              <Image
                src={image}
                alt={name}
                width={400}
                height={300}
                className="transition-transform group-hover:scale-105"
              />
              <span className="text-2xl text-white font-kanit absolute bottom-2 left-5 z-10">
                {name}
              </span>
              <div className="absolute inset-0 bg-black opacity-50 " />
            </div>
          </ShowRecipesOneCountry>
        ))}
      </section>
      <RedirectPageCountry />
    </section>
  )
}

export default SectionCountry
