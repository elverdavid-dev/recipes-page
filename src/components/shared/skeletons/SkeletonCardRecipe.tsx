import { Skeleton } from '@nextui-org/react'

const SkeletonCardRecipe = () => {
	return (
		<div
			role="status"
			className="w-full h-[220px] md:w-[249px] md:h-[343px] lg:w-[280px] lg:h-[296px]"
		>
			<Skeleton className="w-full h-[130px] md:h-[178px] lg:h-[210px] rounded-xl" />
			<Skeleton className="mt-3 mx-3 inline-block h-5 w-[70%] rounded-full" />
			<Skeleton className="my-3 mx-3 inline-block h-4 w-[40%] rounded-full" />
		</div>
	)
}

export default SkeletonCardRecipe
