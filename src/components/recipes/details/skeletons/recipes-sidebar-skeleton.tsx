import { createSkeletons } from '@/utils/common/create-skeletons'
import { Skeleton } from '@nextui-org/react'

const RecipesSidebarSkeleton = () => {
	const skeletons = createSkeletons(7)
	return (
		<div className="flex flex-col mt-4">
			<Skeleton className="h-4 w-36 rounded-full my-3 mx-2 lg:mx-0" />
			<aside className="max-w-sm">
				{skeletons.map(({ id }) => (
					<div className="flex items-start gap-x-3 py-3 px-2 group" key={id}>
						<Skeleton className="w-[100px] h-[72px] rounded-xl" />
						<div>
							<Skeleton className="h-3 w-32 rounded-full mb-2" />
							<Skeleton className="h-3 w-28 rounded-full" />
						</div>
					</div>
				))}
			</aside>
		</div>
	)
}

export default RecipesSidebarSkeleton
