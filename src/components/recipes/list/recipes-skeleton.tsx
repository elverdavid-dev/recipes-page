import BackButton from '@/components/shared/common/back-button'
import RecipesCardSkeleton from '@/components/shared/skeletons/recipes-card-skeleton'
import { createSkeletons } from '@/libs/common/create-skeletons'

const RecipesSkeleton = () => {
	const skeletons = createSkeletons(8)
	return (
		<>
			<BackButton label={'Recetas'} href="/" />
			<section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 gap-2 px-2 mt-10">
				{skeletons.map(({ id }) => (
					<RecipesCardSkeleton key={id} />
				))}
			</section>
		</>
	)
}

export default RecipesSkeleton
