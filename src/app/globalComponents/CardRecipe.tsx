import Image from '@/globalComponents/Image'
import { type CardProps } from '@/interfaces/CardProps'

export default function CardRecipe({ img, name }: CardProps) {
  return (
    <>
      <article className="flex flex-wrap  cursor-pointer  group">
        <Image
          src={img}
          alt={name}
          width={280}
          height={210}
          className="hover:scale-105 transition-transform"
        />
        <span className="font-nunito capitalize text-lg text-slate-950 py-2  group-hover:text-gold transition-all">
          {name}
        </span>
      </article>
    </>
  )
}
