import { Recipes } from "../interfaces/Recipes.interface";

const BaseUrl = <string>process.env.BASE_URL;
console.log(BaseUrl);
export async function GetLatestRecipes() {
	try {
		const response = await fetch(`${BaseUrl}/recipes/latest`, {
			cache: "force-cache",
			next: { revalidate: 60 },
		});
		if (!response.ok) {
			throw new Error("Error al obtener las recetas");
		}
		const data: Recipes[] = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}
