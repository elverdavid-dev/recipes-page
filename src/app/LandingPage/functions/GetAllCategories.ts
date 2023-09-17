import { Categories } from "@interfaces/Categories.interface";

const baseUrl = <string>process.env.NEXT_PUBLIC_BASE_URL;

export async function GetAllCategories() {
  try {
    const response = await fetch(`${baseUrl}/categories`);
    if (!response.ok) {
      throw Error("Error al obtener las categorias");
    }
    const data: Categories[] = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
