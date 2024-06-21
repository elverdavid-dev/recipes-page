import CardCountry from '@/components/shared/CardCountry'
import Subtitle from '@/components/shared/Subtitle'
import { getAllCountries } from '@/services/countries/get-all-contries'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

const SectionCountry = async () => {
	const countrys = await getAllCountries(6)

	return (
		<section className="mt-32 px-2 lg:px-20 py-4 2xl:container mx-auto">
			<div className="flex items-center justify-between">
				<Subtitle>Recetas de todo el mundo</Subtitle>
				<Link
					href="/paises"
					className="hover:text-gold text-lg transition-all hover:underline flex items-center gap-x-1"
				>
					Ver más
					<FiArrowRight size={18} strokeWidth={1.8} />
				</Link>
			</div>
			<section className="grid md:grid-cols-2  lg:grid-cols-3 lg:justify-center gap-y-5  md:gap-5 lg:gap-5">
				{countrys?.data.map(({ _id, image, name }) => (
					<Link href={`/paises/${_id}?name=${name}`} key={_id}>
						<CardCountry img={image} name={name} />
					</Link>
				))}
			</section>
			{/* <div className="flex justify-center items-center mt-10">
				<Button
					size="lg"
					variant="ghost"
					className="px-32"
					as={Link}
					href="/paises"
				>
					Ver más
				</Button>
			</div> */}
		</section>
	)
}

export default SectionCountry
