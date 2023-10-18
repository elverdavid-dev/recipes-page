import { formatDuration } from '@/(Recipes pages)/functions/FormayDurations'
import ChipRecipesLates from '@/LandingPage/components/ChipRecipesLates'
import Image from '@/globalComponents/Image'
import { type CardProps } from '@/interfaces/CardProps'

export default function CardRecipe({
  img,
  name,
  category,
  duration,
  portions
}: CardProps) {
  const durationFormat = formatDuration(duration)
  return (
    <>
      <article className="flex flex-col  cursor-pointer  group relative bg-white rounded-md shadow border">
        <ChipRecipesLates>{category} </ChipRecipesLates>
        <Image
          src={img}
          alt={name}
          width={280}
          height={210}
          className="group-hover:scale-105 transition-transform w-full h-full"
        />
        <span className=" font-kanit capitalize text-xl text-slate-950 pt-3 px-3  group-hover:text-gold transition-all">
          {name}
        </span>
        <span className="py-3 px-3 font-nunito text-sm text-slate-700">
          {durationFormat} | {portions} Porciones{' '}
        </span>
      </article>
    </>
  )
}
