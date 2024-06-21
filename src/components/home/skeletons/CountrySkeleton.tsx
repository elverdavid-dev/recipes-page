import Subtitle from '@/components/shared/Subtitle'
import SkeletonCardCountry from '@/components/shared/skeletons/SkeletonCardCountry'

const CountrySkeleton = () => {
	return (
		<section className="mt-32 px-2 lg:px-20 py-4 2xl:container 2xl:mx-auto">
			<Subtitle>Recetas de todo el mundo</Subtitle>
			<section className="grid md:grid-cols-2  lg:grid-cols-3 lg:justify-center gap-y-5  md:gap-5 lg:gap-5">
				{[...Array(6)].map((_, index) => (
					<SkeletonCardCountry key={index + 1} />
				))}
			</section>
		</section>
	)
}

export default CountrySkeleton
