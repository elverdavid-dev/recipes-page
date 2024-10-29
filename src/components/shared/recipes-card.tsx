import ImageWrapper from '@/components/shared/common/image-wrapper'
import { formatDuration } from '@/utils/common/format-duration'
import type { FC } from 'react'

interface Props {
	img: string
	name: string
	duration: number
	portions: number
}
const CardRecipe: FC<Props> = ({ img, name, duration, portions }) => {
	const durationFormat = formatDuration(duration)
	return (
		<>
			<article className="flex flex-col  cursor-pointer  group relative">
				<ImageWrapper
					src={img}
					alt={name}
					width={280}
					height={210}
					className="w-full h-auto rounded-xl object-cover"
				/>
				<h2 className="font-extrabold capitalize text-xl pt-3 px-3  group-hover:text-gold transition-all truncate">
					{name}
				</h2>
				<span className="py-1 px-3 text-sm dark:text-gray-400">
					{durationFormat} • {portions} Porciones
				</span>
			</article>
		</>
	)
}

export default CardRecipe
