'use client'
import ShowOneRecipe from '@/globalComponents/ShowOneRecipe'
import PaginationComponent from './Pagination'
import CardRecipe from '@/globalComponents/CardRecipe'
import Search from './Search'
import { type RecipeList } from '@/interfaces/RecipesList.interface'
import useRecipes from '@/hooks/useRecipes'

const ContentRecipes = ({ data }: { data: RecipeList | undefined }) => {
  const { valueSearched, handleValue, recipes } = useRecipes(data?.data ?? [])

  const initialPage = data?.page || 1
  const total = data?.totalPages || 1
  return (
    <>
      <Search value={valueSearched} handleValue={handleValue} />
      <div className="flex items-center justify-between px-5">
        <h2 className="Subtitle">Recetas</h2>
        <span className="text-lg font-inter px-10">
          Total de recetas {data?.totalItems}{' '}
        </span>
      </div>
      <section className="mt-16 lg:mx-16 mx-4 grid grid-cols-2 lg:grid-cols-4 gap-5">
        {recipes.length === 0
          ? (
          <span>
            No Hay recetas que concidan con la busqueda : {valueSearched}
          </span>
            )
          : (
              recipes.map(({ _id, image, name }) => (
            <div key={_id}>
              <ShowOneRecipe id={_id}>
                <CardRecipe img={image} name={name} />
              </ShowOneRecipe>
            </div>
              ))
            )}
      </section>
      <PaginationComponent initialPage={initialPage} total={total} />
    </>
  )
}

export default ContentRecipes
