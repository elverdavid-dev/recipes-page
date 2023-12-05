import { formatDuration } from '@/(Recipes pages)/functions/FormatDurations'
import ChipRecipesLatest from '@/LandingPage/components/ChipRecipesLatest'
import Image from '@/SharedComponents/Image'
import { type CardRecipeProps } from '@/interfaces/CardRecipeProps.interface'

export default function CardRecipe({
	img,
	name,
	category,
	duration,
	portions,
}: CardRecipeProps) {
	const durationFormat = formatDuration(duration)
	return (
		<>
			<article className="flex flex-col  cursor-pointer  group relative bg-white rounded-md shadow border">
				<ChipRecipesLatest
					className={`${category === undefined ? 'hidden' : ''}`}
				>
					{category}{' '}
				</ChipRecipesLatest>
				<Image
					src={img}
					alt={name}
					width={280}
					height={210}
					className="group-hover:scale-105 transition-transform w-full h-full"
				/>
				<span className=" font-readexPro capitalize text-xl text-slate-950 pt-3 px-3  group-hover:text-gold transition-all truncate">
					{name}
				</span>
				<span className="py-3 px-3 font-nunito text-sm text-slate-700">
					{durationFormat} | {portions} Porciones{' '}
				</span>
			</article>
		</>
	)
}
