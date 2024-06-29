import CardCountry from '@/components/shared/CardCountry'
import Subtitle from '@/components/shared/Subtitle'
import { getAllCountries } from '@/services/countries/get-all-contries'
import { Button } from '@nextui-org/react'
import { ArrowRight02Icon } from 'hugeicons-react'
import Link from 'next/link'

const SectionCountry = async () => {
	const countrys = await getAllCountries(6)

	return (
		<section className="mt-20 px-2 lg:px-20 py-4 2xl:container mx-auto">
			<Subtitle>Recetas del mundo</Subtitle>
			<section className="grid md:grid-cols-2  lg:grid-cols-3 lg:justify-center gap-y-5  md:gap-5 lg:gap-5">
				{countrys?.data.map(({ _id, image, name }) => (
					<Link href={`/paises/${_id}?name=${name}`} key={_id}>
						<CardCountry img={image} name={name} />
					</Link>
				))}
			</section>
			<div className="flex justify-center items-center mt-10">
				<Button
					size="lg"
					variant="ghost"
					className="px-32 group"
					as={Link}
					href="/paises"
					endContent={
						<ArrowRight02Icon
							size={20}
							className="group-hover:translate-x-1 transition-all"
						/>
					}
				>
					Ver más
				</Button>
			</div>
		</section>
	)
}

export default SectionCountry
