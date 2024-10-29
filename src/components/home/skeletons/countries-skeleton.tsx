import Subtitle from '@/components/shared/common/subtitle'
import { createSkeletons } from '@/utils/common/create-skeletons'
import { Skeleton } from '@nextui-org/react'

const CountriesSkeleton = () => {
	const skeletons = createSkeletons(6)
	return (
		<section className="mt-20 px-2 lg:px-20 py-4 2xl:container mx-auto">
			<Subtitle>Recetas del mundo</Subtitle>
			<section className="grid md:grid-cols-2  lg:grid-cols-3 lg:justify-center gap-y-3  md:gap-5">
				{skeletons.map(({ id }) => (
					<Skeleton
						key={id}
						className="w-full h-[277px] md:w-[379px] md:h-[250px] lg:w-[388px] lg:h-[277px] rounded-xl"
					/>
				))}
			</section>
		</section>
	)
}

export default CountriesSkeleton
