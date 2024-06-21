import SkeletonAllCountry from '@/components/countries/SkeletonAllCountry'
import CardCountry from '@/components/shared/CardCountry'
import Subtitle from '@/components/shared/Subtitle'
import { getAllCountries } from '@/services/countries/get-all-contries'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'

export const metadata: Metadata = {
	title: 'Explora la Gastronomía Internacional por Países | GlobalFood',
}

const pageAllCountry = async () => {
	const dataCountry = await getAllCountries(12)
	return (
		<Suspense fallback={<SkeletonAllCountry />}>
			<section className="2xl:mx-auto 2xl:container px-2 md:px-4 lg:px-16 mt-20">
				<div className="flex justify-between items-center">
					<Subtitle>Paises</Subtitle>
					<h3 className="text-xl">{dataCountry?.totalItems} Paises totales</h3>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-10  gap-y-5 mt-16">
					{dataCountry?.data.map(({ _id, image, name }) => (
						<div key={_id}>
							<Link href={`/paises/${_id}?name=${name}`}>
								<CardCountry img={image} name={name} />
							</Link>
						</div>
					))}
				</div>
			</section>
		</Suspense>
	)
}

export default pageAllCountry
