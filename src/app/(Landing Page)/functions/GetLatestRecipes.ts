import { Recipes } from "../interfaces/Recipes.interface";

const baseUrl = "https://recipes-api-r43i.onrender.com/v1/api/recipes/latest";

export async function GetLatestRecipes() {
	try {
		const response = await fetch(baseUrl);
		if (!response.ok) {
			throw new Error("Error al obtener las recetas");
		}
		const data: Recipes[] = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}
