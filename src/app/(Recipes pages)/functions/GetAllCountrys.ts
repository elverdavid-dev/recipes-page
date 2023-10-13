import { baseUrl } from '@/lib/utils'

export async function GetAllCountrys() {
  try {
    const response = await fetch(`${baseUrl}/countrys?page=1&limit=10`)
    if (!response.ok) {
      throw new Error('Error a el obtener los paises')
    }
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}
