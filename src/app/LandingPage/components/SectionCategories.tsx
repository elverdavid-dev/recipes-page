import Image from '@/SharedComponents/Image'
import { GetAllCategories } from '../functions/GetAllCategories'
import Carusel from './Carusel'
import ShowRecipesOneCategory from './ShowRecipesOneCategory'

const SectionCategories = async () => {
  const Categories = await GetAllCategories()

  return (
    <section className="mt-32 px-4 lg:px-20 my-10 2xl:container mx-auto">
      <h2 className="Subtitle">Explora nuestras categorias</h2>
      <Carusel>
        {Categories?.map(({ _id, image, name }) => (
          <ShowRecipesOneCategory id={_id} key={_id} category={name}>
            <section className="group">
              <Image
                src={image}
                alt={name}
                width={280}
                height={210}
                className="hover:scale-105 transition-all"
              />
              <span className="text-xl text-slate-950 font-nunito block py-2 group-hover:text-gold transition-all ">
                {name}{' '}
              </span>
            </section>
          </ShowRecipesOneCategory>
        ))}
      </Carusel>
    </section>
  )
}

export default SectionCategories
