import { RecipeList } from "../interfaces/RecipesList.interface";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function GetAllRecipes() {
  try {
    const response = await fetch(`${baseUrl}/recipes?page=1&limit=10`, {
      cache: "force-cache",
      next: { revalidate: 60 },
    });
    if (!response.ok) {
      throw new Error("Error al obtener todas las recetas");
    }
    const data: RecipeList = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
