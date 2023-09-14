import { Recipes } from "@interfaces/Recipes.interface";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

interface ApiResponse extends Recipes {
  message?: string;
}
export async function GetAllRecipesOfOneCategory(id: string) {
  try {
    const response = await fetch(`${baseUrl}/recipes/filter?CategoryId=${id}`);
    if (!response.ok) {
      throw new Error("Error al obtener las recetas de una categoria");
    }
    const data: ApiResponse = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
