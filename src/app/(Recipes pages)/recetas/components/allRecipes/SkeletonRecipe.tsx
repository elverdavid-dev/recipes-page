import SkeletonCard from '@/components/skeletons/SkeletonCardRecipe'

const SkeletonRecipe = () => {
	return (
		<>
			<div className="flex items-center justify-between px-5">
				<h2 className="Subtitle">Recetas</h2>
				<span className="inline-block h-5 w-32 rounded-full bg-gray-300 animate-pulse" />
			</div>
			<section className="mt-16 px-2 mx-auto  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 gap-3">
				{[...Array(8)].map((_, index) => (
					<SkeletonCard key={index + 1} />
				))}
			</section>
			<div className="mt-10 flex justify-center">
				<span className="h-8 w-24 bg-gray-300 rounded-md animate-pulse" />
			</div>
		</>
	)
}

export default SkeletonRecipe
