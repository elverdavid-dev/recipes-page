import { RecipeList } from "@/interfaces/RecipesList.interface";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

interface ApiResponse extends RecipeList {
  message?: string;
}
export async function GetAllRecipesOfOneCategory(id: string) {
  try {
    const response = await fetch(
      `${baseUrl}/recipes/filter/categories?CategoryId=${id}&page=1&limit=10`
    );
    if (!response.ok) {
      throw new Error("Error al obtener las recetas de una categoria");
    }
    const data: ApiResponse = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
