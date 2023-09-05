import { Categories } from "./Categories.interface";

export interface Recipes {
	_id: string;
	name: string;
	description: string;
	ingredients: string[];
	steps: string[];
	category: Categories;
	image: string;
	public_id: string;
	createdAt: string;
	updatedAt: string;
}
