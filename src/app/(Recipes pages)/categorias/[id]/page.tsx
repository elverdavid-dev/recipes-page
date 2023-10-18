import CardRecipe from '@/globalComponents/CardRecipe'
import ShowOneRecipe from '@/globalComponents/ShowOneRecipe'
import { type ParamProps } from '@interfaces/ParamProps.interface'
import { GetAllRecipesOneCategory } from '../../functions/GetAllRecipesOneCategory'

const page = async ({ params }: ParamProps) => {
  const recipes = await GetAllRecipesOneCategory(params.id)
  return (
    <section className="mx-auto container">
      {Array.isArray(recipes?.data) ? (
        <section className="grid grid-cols-3 gap-5 lg:px-20 px-4 mt-20">
          {recipes?.data.map(
            ({ _id, name, image, duration, category, portions }) => (
              <ShowOneRecipe id={_id} key={_id}>
                <CardRecipe
                  name={name}
                  img={image}
                  category={category.name}
                  duration={duration}
                  portions={portions}
                />
              </ShowOneRecipe>
            )
          )}
        </section>
      ) : (
        <span className="mt-10 text-lg flex justify-center">
          {recipes?.message}
        </span>
      )}
    </section>
  )
}

export default page
