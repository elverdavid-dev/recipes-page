import { GetAllCountry } from '@/LandingPage/functions/GetAllCountry'
import CardCountry from '@/globalComponents/CardCountry'

const page = async () => {
  const data = await GetAllCountry()
  console.log(data)
  return (
    <section className="mx-auto container px-4 mt-20">
      <h3 className="text-end py-5 text-2xl font-kanit">
        {data?.totalItems} Paises{' '}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data?.data.map(({ _id, image, name }) => (
          <div key={_id}>
            <CardCountry img={image} name={name} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default page
