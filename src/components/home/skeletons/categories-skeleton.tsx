import Subtitle from '@/components/shared/Subtitle'
import { createSkeletons } from '@/libs/common/create-skeletons'
import { Skeleton } from '@nextui-org/react'

const CategoriesSkeleton = () => {
	const skeletons = createSkeletons(4)
	return (
		<section className="mt-32 px-4 lg:px-20 my-10 2xl:container 2xl:mx-auto">
			<Subtitle>Categorias</Subtitle>
			<div className="flex items-center gap-x-3 overflow-x-hidden">
				{skeletons.map(({ id }) => (
					<Skeleton
						key={id}
						className="w-[230px] h-[150px] md:w-[264px] md:h-[188px] rounded-xl flex-shrink-0"
					/>
				))}
			</div>
		</section>
	)
}

export default CategoriesSkeleton
