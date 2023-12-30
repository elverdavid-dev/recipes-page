import SkeletonCard from '@shared-components/skeletons/SkeletonCardRecipe'

const RecipesLatestSkeleton = () => {
	return (
		<section className="mt-32 lg:px-20 px-2 2xl:container mx-auto">
			<h2 className="Subtitle">Ultimas recetas</h2>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5">
				{[...Array(12)].map((_, index) => (
					<SkeletonCard key={index + 1} />
				))}
			</div>
		</section>
	)
}

export default RecipesLatestSkeleton
