'use client'
import CardRecipe from '@/globalComponents/CardRecipe'
import ShowOneRecipe from '@/globalComponents/ShowOneRecipe'
import useRecipes from '@/hooks/useRecipes'
import { type RecipeList } from '@/interfaces/RecipesList.interface'
import PaginationComponent from './Pagination'
import Search from './Search'

const ContentRecipes = ({ data }: { data: RecipeList | undefined }) => {
  const {
    recipes,
    currentPage,
    setCurrentPage,
    searchRecipeTyped,
    totalPages,
    isFilteredData
  } = useRecipes({
    initialData: data?.data,
    initialPage: 1,
    productsPerPage: data?.data.length,
    countOfPages: data?.totalPages
  })

  const totalRecipes = isFilteredData ? recipes.length : data?.totalItems
  return (
    <>
      <Search handleValue={searchRecipeTyped} />
      <div className="flex items-center justify-between px-5">
        <h2 className="Subtitle">Recetas</h2>
        <span className="text-lg font-nunito">
          {totalRecipes} Recetas totales
        </span>
      </div>
      <section className="mt-16 px-4 mx-auto  grid grid-cols-2 lg:grid-cols-4 gap-5">
        {recipes.length === 0 ? (
          <span>No Hay recetas que concidan con la busqueda</span>
        ) : (
          recipes.map(({ _id, image, name, category, duration, portions }) => (
            <div key={_id}>
              <ShowOneRecipe id={_id}>
                <CardRecipe
                  img={image}
                  name={name}
                  category={category.name}
                  duration={duration}
                  portions={portions}
                />
              </ShowOneRecipe>
            </div>
          ))
        )}
      </section>
      <PaginationComponent
        currentPage={currentPage}
        handlePage={setCurrentPage}
        total={totalPages}
      />
    </>
  )
}

export default ContentRecipes
