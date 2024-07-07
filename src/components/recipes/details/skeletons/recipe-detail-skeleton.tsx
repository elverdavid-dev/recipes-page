import { Skeleton } from '@nextui-org/react'

const RecipeDetailSkeleton = () => {
	return (
		<section
			className="container px-2 md:px-8 lg:px-10  mx-auto mt-16 lg:flex lg:justify-between gap-x-16 "
			role="status"
		>
			<div className="lg:w-[700px] w-full">
				<Skeleton className="h-3 w-20 rounded-full" />
				<Skeleton className="h-6 w-[40%] rounded-full my-3" />
				<Skeleton className="w-full h-[282px] lg:w-[700px] lg:h-[500px] rounded-xl" />
				<div className="mt-10">
					<Skeleton className="w-[60%] h-4 rounded-full my-2" />
					<Skeleton className="w-[55%] h-4 rounded-full" />
					<Skeleton className="w-[40%] h-4 rounded-full my-2" />
				</div>
			</div>
		</section>
	)
}

export default RecipeDetailSkeleton
