import { formatDuration } from '@/utils/common/format-duration'
import { Image } from '@nextui-org/react'
import type { FC } from 'react'
import ImageWrapper from './common/image-wrapper'

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
			<article className="flex flex-col  cursor-pointer  group">
				<ImageWrapper
					src={img}
					alt={name}
					width={280}
					className="rounded-3xl h-[132px] md:h-[200px]"
				/>
				<h2 className="font-bold capitalize text-xl pt-3 px-3  group-hover:text-gold transition-all line-clamp-1">
					{name}
				</h2>
				<span className=" px-3 text-sm font-semibold dark:text-gray-400">
					{durationFormat} • {portions} Porciones
				</span>
			</article>
		</>
	)
}

export default CardRecipe
