import CardCountries from '@/components/countries/card-countries'
import Subtitle from '@/components/shared/common/subtitle'
import type { CountriesData } from '@/types/countries/countries-interface'
import { Button } from '@nextui-org/react'
import { ArrowRight02Icon } from 'hugeicons-react'
import Link from 'next/link'
import type { FC } from 'react'

interface Props {
	countries?: CountriesData
}

const SectionCountries: FC<Props> = async ({ countries }) => {
	return (
		<section className="mt-20 px-2 lg:px-20 py-4 2xl:container mx-auto">
			<Subtitle>Recetas del mundo</Subtitle>
			<section className="grid md:grid-cols-2  lg:grid-cols-3 lg:justify-center gap-y-3  md:gap-5">
				{countries?.data.map(({ _id, image, name }) => (
					<Link href={`/paises/${_id}?name=${name}`} key={_id}>
						<CardCountries image={image} name={name} />
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

export default SectionCountries
