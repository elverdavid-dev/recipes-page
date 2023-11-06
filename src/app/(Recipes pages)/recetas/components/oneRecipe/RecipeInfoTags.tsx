import { formatDuration } from "@/(Recipes pages)/functions/FormayDurations"
import {
	RiCalendarLine,
	RiFunctionLine,
	RiRestaurant2Line,
	RiTimeLine,
} from "react-icons/ri"

interface RecipeInfo {
	fecha: string
	duration: number
	category: string
	portions: number
}

const RecipeInfoTags = ({
	category,
	duration,
	fecha,
	portions,
}: RecipeInfo) => {
	const durationFormat = formatDuration(duration)
	return (
		<div className="flex flex-wrap gap-y-2 items-center gap-x-10 py-3 font-readexPro">
			{/* Fecha */}
			<span className="RecipeInfoTags">
				<RiCalendarLine className="text-gold" size={20} /> {fecha}
			</span>
			{/* Duracion */}
			<span className="RecipeInfoTags">
				<RiTimeLine className="text-gold" size={20} /> {durationFormat}
			</span>
			{/* Categoria */}
			<span className="RecipeInfoTags">
				<RiFunctionLine className="text-gold" size={20} />
				{category}
			</span>
			{/* Porciones */}
			<span className="RecipeInfoTags">
				<RiRestaurant2Line className="text-gold" size={20} />
				{portions} {"Porciones"}
			</span>
		</div>
	)
}

export default RecipeInfoTags
