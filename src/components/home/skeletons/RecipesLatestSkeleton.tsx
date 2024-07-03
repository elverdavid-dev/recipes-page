import Subtitle from '@/components/shared/Subtitle'
import SkeletonCard from '@/components/shared/skeletons/SkeletonCardRecipe'
import { createSkeletons } from '@/libs/common/create-skeletons'

const RecipesLatestSkeleton = () => {
	const skeletons = createSkeletons(12)
	return (
		<section className="mt-32 lg:px-20 px-2 2xl:container mx-auto">
			<Subtitle>Ultimas recetas</Subtitle>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5">
				{skeletons.map(({ id }) => (
					<SkeletonCard key={id} />
				))}
			</div>
		</section>
	)
}

export default RecipesLatestSkeleton
