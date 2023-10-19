import { GetAllRecipesOneCountry } from '@/(Recipes pages)/functions/GetAllRecipesOneCountry'
import CardRecipe from '@/globalComponents/CardRecipe'
import NotFound from '@/globalComponents/NotFound'
import ShowOneRecipe from '@/globalComponents/ShowOneRecipe'
import { type ParamProps } from '@/interfaces/ParamProps.interface'
import { notFound } from 'next/navigation'

const page = async ({ params }: ParamProps) => {
  const id = params.id
  const data = await GetAllRecipesOneCountry(id)
  if (data === undefined) {
    notFound()
  }
  return (
    <section className="mx-auto container mt-16 lg:px-20 px-4">
      {Array.isArray(data) ? (
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map(({ _id, image, name, category, portions, duration }) => (
            <section key={_id}>
              <ShowOneRecipe id={_id}>
                <CardRecipe
                  name={name}
                  img={image}
                  category={category.name}
                  duration={duration}
                  portions={portions}
                />
              </ShowOneRecipe>
            </section>
          ))}
        </section>
      ) : (
        <NotFound description="No hay recetas relacionadas a este pais" />
      )}
    </section>
  )
}

export default page
