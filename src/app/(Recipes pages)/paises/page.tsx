import ShowRecipesOneCountry from "@/LandingPage/components/ShowRecipesOneCountry"
import { GetAllCountry } from "@/LandingPage/functions/GetAllCountry"
import CardCountry from "@/SharedComponents/CardCountry"

const pageAllCountry = async () => {
	const dataCountry = await GetAllCountry(12)
	return (
		<section className="mx-auto container px-4 mt-20">
			<h3 className="text-end py-5 text-2xl font-readexPro">
				{dataCountry?.totalItems} Paises{" "}
			</h3>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
				{dataCountry?.data.map(({ _id, image, name }) => (
					<div key={_id}>
						<ShowRecipesOneCountry id={_id} name={name}>
							<CardCountry img={image} name={name} />
						</ShowRecipesOneCountry>
					</div>
				))}
			</div>
		</section>
	)
}

export default pageAllCountry
