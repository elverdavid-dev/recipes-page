import { createSkeletons } from '@/libs/common/create-skeletons'
import BackButton from '@/components/shared/common/back-button'
import { Skeleton } from '@nextui-org/react'

const CountriesSkeleton = () => {
	const skeletons = createSkeletons(9)
	return (
		<section className="2xl:mx-auto 2xl:container px-2 md:px-4 lg:px-16 mt-20">
			<BackButton label="Paises" href="/" />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-3  gap-y-5 mt-16">
				{skeletons.map(({ id }) => (
					<Skeleton
						key={id}
						className="w-full h-[277px] md:w-[379px] md:h-[250px] lg:w-[400px] lg:h-[277px] rounded-xl"
					/>
				))}
			</div>
		</section>
	)
}

export default CountriesSkeleton
