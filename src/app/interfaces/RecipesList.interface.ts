import { Recipes } from "./Recipes.interface";

export interface RecipeList {
  page: number;
  totalPages: number;
  totalRecipes: number;
  data: Recipes[];
}
