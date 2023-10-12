import { type ParamProps } from '@interfaces/ParamProps.interface'
import Aside from '../components/AsideSection'
import ShowDataRecipe from '../components/ShowDataRecipe'

const PageById = async ({ params }: ParamProps) => {
  const id = params.id

  return (
    <>
      <section className="container lg:px-10 px-4 mx-auto mt-16 lg:flex lg:justify-between gap-x-16">
        <ShowDataRecipe id={id} />
        <Aside />
      </section>
    </>
  )
}

export default PageById
