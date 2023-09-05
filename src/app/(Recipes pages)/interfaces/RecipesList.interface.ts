import { Recipes } from "@/app/(Landing Page)/interfaces/Recipes.interface";

export interface RecipeList {
	page: number;
	totalPages: number;
	totalRecipes: number;
	data: Recipes[];
}
