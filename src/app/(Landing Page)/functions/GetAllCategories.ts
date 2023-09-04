//No puede usar process.env.BASE_URL , aparece como undefined y causa un error
const baseUrl = "https://recipes-api-r43i.onrender.com/v1/api/categories";

export async function GetAllCategories() {
	try {
		const response = await fetch(baseUrl);
		if (!response.ok) {
			throw Error("Error al obtener las categorias");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}
