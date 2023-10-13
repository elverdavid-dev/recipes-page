import CardCountry from '@/globalComponents/CardCountry'
import { GetAllCountry } from '../functions/GetAllCountry'
import RedirectPageCountry from './RedirectPageCountry'
import ShowRecipesOneCountry from './ShowRecipesOneCountry'

const SectionCountry = async () => {
  const countrys = await GetAllCountry()

  return (
    <section className="mt-32 lg:px-20 py-4 2xl:container mx-auto">
      <h2 className="Subtitle">Recetas de todo el mundo</h2>
      <section className="grid md:grid-cols-2 md:px-4 lg:grid-cols-3 justify-center gap-5">
        {countrys?.data.map(({ _id, image, name }) => (
          <ShowRecipesOneCountry key={_id} id={_id}>
            <CardCountry img={image} name={name} />
          </ShowRecipesOneCountry>
        ))}
      </section>
      <RedirectPageCountry />
    </section>
  )
}

export default SectionCountry
