import { GetAllRecipesOneCountry } from '@/(Recipes pages)/functions/GetAllRecipesOneCountry'
import CardRecipe from '@/globalComponents/CardRecipe'
import ShowOneRecipe from '@/globalComponents/ShowOneRecipe'
import { type ParamProps } from '@/interfaces/ParamProps.interface'
import Image from 'next/image'

const page = async ({ params }: ParamProps) => {
  const id = params.id
  const data = await GetAllRecipesOneCountry(id)

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
        <section>
          <Image
            src="/404-notFound.svg"
            alt="404 not found"
            width={400}
            height={300}
            className="mx-auto"
          />
          <p className="text-center text-3xl font-kanit text-slate-950">
            No hay recetas relacionadas a este pais
          </p>
        </section>
      )}
    </section>
  )
}

export default page
