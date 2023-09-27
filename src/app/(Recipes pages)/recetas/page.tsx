import ContentRecipes from '../components/ContentRecipes'
import Search from '../components/Search'
import { GetAllRecipes } from '../functions/GetAllRecipes'
const RecipesPage = async () => {
  const data = await GetAllRecipes()
  return (
    <>
      <ContentRecipes data={data}/>
    </>
  )
}

export default RecipesPage
