import ContentRecipes from '../components/ContentRecipes'
import { MaxWidthWrapper } from '../components/MaxWidthWrapper'
import { GetAllRecipes } from '../functions/GetAllRecipes'

const RecipesPage = async () => {
  const data = await GetAllRecipes()

  return (
    <>
      <MaxWidthWrapper>
        <ContentRecipes data={data} />
      </MaxWidthWrapper>
    </>
  )
}

export default RecipesPage
