import { formatDuration } from '@/libs/common/format-duration'
import {
	Calendar03Icon,
	Clock01Icon,
	DashboardSquare01Icon,
	Tag01Icon,
} from 'hugeicons-react'
interface RecipeInfo {
	date: string
	duration: number
	category: string
	portions: number
}

const RecipeInfoTags = ({ category, duration, date, portions }: RecipeInfo) => {
	const durationFormat = formatDuration(duration)
	return (
		<div className="flex flex-wrap items-center gap-x-2 py-3">
			{/* Duration */}
			<span className="RecipeInfoTags">
				<Clock01Icon className="text-gold" size={18} strokeWidth={2} />{' '}
				{durationFormat}
			</span>
			{/* Category */}
			<span className="RecipeInfoTags">
				<Tag01Icon className="text-gold" size={18} strokeWidth={2} />
				{category}
			</span>
			{/* Portions */}
			<span className="RecipeInfoTags">
				<DashboardSquare01Icon
					className="text-gold"
					size={18}
					strokeWidth={2}
				/>
				{portions} {'Porciones'}
			</span>
			<span className="RecipeInfoTags">
				<Calendar03Icon className="text-gold" size={18} strokeWidth={2} />
				{date}
			</span>
		</div>
	)
}

export default RecipeInfoTags
