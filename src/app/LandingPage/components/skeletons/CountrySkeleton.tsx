import SkeletonCardCountry from '@/SharedComponents/skeletons/SkeletonCardCountry'

const CountrySkeleton = () => {
	return (
		<section className="mt-32 px-2 lg:px-20 py-4 2xl:container 2xl:mx-auto">
			<h2 className="Subtitle">Recetas de todo el mundo</h2>
			<section className="grid md:grid-cols-2  lg:grid-cols-3 lg:justify-center gap-y-5  md:gap-5 lg:gap-5">
				{[...Array(6)].map((_, index) => (
					<SkeletonCardCountry key={index + 1} />
				))}
			</section>
		</section>
	)
}

export default CountrySkeleton
