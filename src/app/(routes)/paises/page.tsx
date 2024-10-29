import CardCountries from '@/components/countries/card-countries'
import CountriesSkeleton from '@/components/countries/countries-skeleton'
import BackButton from '@/components/shared/common/back-button'
import { getAllCountries } from '@/services/countries/get-all-contries'
import { createMetadata } from '@/utils/common/create-metadata'
import Link from 'next/link'
import { Suspense } from 'react'

export const metadata = createMetadata({
	title: 'Explora la Gastronomía Internacional por Países',
})

const CountriesPage = async () => {
	const countriesData = await getAllCountries()

	return (
		<>
			<Suspense fallback={<CountriesSkeleton />}>
				<section className="2xl:mx-auto 2xl:container px-2 lg:px-20 mt-10">
					<BackButton label="Paises" href="/" />
					<div className="grid md:grid-cols-2  lg:grid-cols-3 lg:justify-center gap-y-3  md:gap-5 mt-16">
						{countriesData?.data?.map(({ _id, image, name }) => (
							<Link href={`/paises/${_id}?name=${name}`} key={_id}>
								<CardCountries image={image} name={name} />
							</Link>
						))}
					</div>
				</section>
			</Suspense>
		</>
	)
}

export default CountriesPage
