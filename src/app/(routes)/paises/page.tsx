import SkeletonAllCountry from '@/components/countries/SkeletonAllCountry'
import CardCountries from '@/components/countries/card-countries'
import BackButton from '@/components/shared/common/back-button'
import { getAllCountries } from '@/services/countries/get-all-contries'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'

export const metadata: Metadata = {
	title: 'Explora la Gastronomía Internacional por Países | GlobalFood',
}

const CountriesPage = async () => {
	const countriesData = await getAllCountries()

	return (
		<Suspense fallback={<SkeletonAllCountry />}>
			<section className="2xl:mx-auto 2xl:container px-2 md:px-4 lg:px-16 mt-10">
				<BackButton label="Paises" href="/" />
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-10  gap-y-5 mt-16">
					{countriesData?.data?.map(({ _id, image, name }) => (
						<Link href={`/paises/${_id}?name=${name}`} key={_id}>
							<CardCountries image={image} name={name} />
						</Link>
					))}
				</div>
			</section>{' '}
		</Suspense>
	)
}

export default CountriesPage
