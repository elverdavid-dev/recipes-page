import Subtitle from '@/components/shared/Subtitle'

const CategorySkeleton = () => {
	return (
		<section className="mt-32 px-2 lg:px-20 my-10 2xl:container mx-auto">
			<Subtitle>Explora nuestras categorias</Subtitle>
			<div className="flex items-center gap-x-4 md:gap-x-5 lg:gap-x-8 overflow-x-hidden">
				{[...Array(4)].map((_, index) => (
					<div
						key={index + 1}
						className="w-[230px] h-[150px] md:w-[264px] md:h-[188px] bg-gray-300 rounded-md animate-pulse flex-shrink-0"
					/>
				))}
			</div>
		</section>
	)
}

export default CategorySkeleton
