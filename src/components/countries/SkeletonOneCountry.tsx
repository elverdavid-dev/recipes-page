import SkeletonCardRecipe from '@/components/shared/skeletons/SkeletonCardRecipe'
import { createSkeletons } from '@/libs/common/create-skeletons'

const SkeletonOneCountry = () => {
	const skeletons = createSkeletons(8)
	return (
		<>
			<p className="w-[35%] h-8 bg-gray-300 rounded-full mx-auto mt-16" />
			<section className="2xl:mx-auto 2xl:container mt-16 lg:px-16 px-2">
				<section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 gap-2">
					{skeletons.map(({ id }) => (
						<SkeletonCardRecipe key={id} />
					))}
				</section>
			</section>
		</>
	)
}

export default SkeletonOneCountry
