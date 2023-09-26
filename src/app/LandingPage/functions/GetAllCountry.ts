import { CountryData } from "@/interfaces/Cuntry.interface";

const baseUrl = <string>process.env.NEXT_PUBLIC_BASE_URL;

export async function GetAllRecipesOneCountry() {
  try {
    const response = await fetch(`${baseUrl}/countrys?page=1&limit=10`, {
      next: { revalidate: 60 },
    });
    if (!response.ok) {
      throw new Error("Error a el obtener todas las recetas de un pais");
    }
    const data: CountryData = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
