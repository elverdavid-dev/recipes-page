import { GetAllRecipesOneCountry } from '@/(Recipes pages)/functions/GetAllRecipesOneCountry'
import CardRecipe from '@/globalComponents/CardRecipe'
import NotFound from '@/globalComponents/NotFound'
import ShowOneRecipe from '@/globalComponents/ShowOneRecipe'
import { type ParamProps } from '@/interfaces/ParamProps.interface'
import { notFound } from 'next/navigation'
import DynamicTitle from '../../../globalComponents/DynamicTitle'

const page = async ({ params }: ParamProps) => {
  const id = params.id
  const recipes = await GetAllRecipesOneCountry(id)

  if (recipes === undefined) {
    notFound()
  }
  return (
    <>
      <DynamicTitle message="Recetas de " />
      <section className="mx-auto container mt-16 lg:px-20 px-4">
        {Array.isArray(recipes) ? (
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {recipes.map(
              ({ _id, image, name, category, portions, duration }) => (
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
              )
            )}
          </section>
        ) : (
          <NotFound description="No hay recetas relacionadas a este pais" />
        )}
      </section>
    </>
  )
}

export default page
