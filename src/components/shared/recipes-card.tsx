import ImageWrapper from '@/components/shared/common/image-wrapper'
import { formatDuration } from '@/libs/common/format-duration'
import type { CardRecipeProps } from '@/types/recipes/card-recipes-props'

export default function CardRecipe({
	img,
	name,
	duration,
	portions,
}: CardRecipeProps) {
	const durationFormat = formatDuration(duration)
	return (
		<>
			<article className="flex flex-col  cursor-pointer  group relative">
				<ImageWrapper
					src={img}
					alt={name}
					width={280}
					height={210}
					className="w-full h-auto rounded-xl"
				/>
				<h2 className="font-extrabold capitalize text-xl pt-3 px-3  group-hover:text-gold transition-all truncate">
					{name}
				</h2>
				<span className="py-1 px-3 text-sm text-gray-700">
					{durationFormat} • {portions} Porciones
				</span>
			</article>
		</>
	)
}
