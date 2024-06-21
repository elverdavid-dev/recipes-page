import SkeletonCardRecipe from '@/components/shared/skeletons/SkeletonCardRecipe'

const SkeletonOneCountry = () => {
	return (
		<>
			<p className="w-[35%] h-8 bg-gray-300 rounded-full mx-auto mt-16" />
			<section className="2xl:mx-auto 2xl:container mt-16 lg:px-16 px-2">
				<section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 gap-2">
					{[...Array(8)].map((_, index) => (
						<SkeletonCardRecipe key={index} />
					))}
				</section>
			</section>
		</>
	)
}

export default SkeletonOneCountry
