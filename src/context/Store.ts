import { GetAllCategories } from "@/app/(Landing Page)/functions/GetAllCategories";
import { Categories } from "@/app/(Landing Page)/interfaces/Categories.interface";
import { create } from "zustand";

interface CategoriesState {
	categories: Categories[];
	getCategories: () => Promise<void>;
}
export const useStore = create<CategoriesState>((set, get) => ({
	categories: [],
	getCategories: async () => {
		const data: Categories[] = await GetAllCategories();
		set((state) => ({ ...state, categories: data }));
	},
}));
