import RedirectPageCountry from '@/LandingPage/components/RedirectPageCountry'
import CardCountry from '@/SharedComponents/CardCountry'
import { GetAllCountry } from '../functions/GetAllCountry'
import ShowRecipesOneCountry from './ShowRecipesOneCountry'

const SectionCountry = async () => {
  const countrys = await GetAllCountry(6)

  return (
    <section className="mt-32 lg:px-20 py-4 2xl:container mx-auto">
      <h2 className="Subtitle">Recetas de todo el mundo</h2>
      <section className="grid md:grid-cols-2  lg:grid-cols-3 px-4 lg:justify-center gap-y-5  md:gap-5 lg:gap-5">
        {countrys?.data.map(({ _id, image, name }) => (
          <ShowRecipesOneCountry key={_id} id={_id} name={name}>
            <CardCountry img={image} name={name} />
          </ShowRecipesOneCountry>
        ))}
      </section>
      <RedirectPageCountry />
    </section>
  )
}

export default SectionCountry
