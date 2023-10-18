import { GetAllRecipes } from '../functions/GetAllRecipes'
import ContentRecipes from './components/ContentRecipes'

const RecipesPage = async () => {
  const data = await GetAllRecipes()

  return (
    <main className="mx-auto container">
      <ContentRecipes data={data} />
    </main>
  )
}

export default RecipesPage
