const CategorySkeleton = () => {
	return (
		<section className="mt-32 px-2 lg:px-20 my-10 2xl:container mx-auto">
			<h2 className="Subtitle">Explora nuestras categorias</h2>
			<div className="flex items-center gap-x-8 overflow-x-hidden">
				{[...Array(4)].map((_, index) => (
					<div
						key={index + 1}
						className="w-[280px] h-[210px] bg-gray-300 rounded-md animate-pulse flex-shrink-0"
					/>
				))}
			</div>
		</section>
	)
}

export default CategorySkeleton
