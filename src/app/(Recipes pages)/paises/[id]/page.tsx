import { GetAllRecipesOneCountry } from '@/(Recipes pages)/functions/GetAllRecipesOneCountry'
import ImageComponent from '@/globalComponents/Image'
import { type ParamProps } from '@/interfaces/ParamProps.interface'
import Image from 'next/image'

const page = async ({ params }: ParamProps) => {
  const id = params.id
  const data = await GetAllRecipesOneCountry(id)

  return (
    <section>
      {Array.isArray(data) ? (
        <section>
          {data.map(({ _id, image, name }) => (
            <section key={_id}>
              <ImageComponent src={image} alt={name} width={300} height={300} />
              <span>{name} </span>
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
