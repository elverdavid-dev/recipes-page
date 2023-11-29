import ShowRecipesOneCountry from '@/LandingPage/components/ShowRecipesOneCountry'
import { GetAllCountry } from '@/LandingPage/functions/GetAllCountry'
import CardCountry from '@/SharedComponents/CardCountry'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Paises•GlobalFood',
}

const pageAllCountry = async () => {
	const dataCountry = await GetAllCountry(12)
	return (
		<section className="mx-auto container px-2 mt-20">
			<div className="flex justify-between items-center">
				<h1 className="lg:text-4xl text-2xl font-readexPro">Paises</h1>
				<h3 className="text-xl font-nunito">
					{dataCountry?.totalItems} Paises totales
				</h3>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10  gap-y-5 mt-16">
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
