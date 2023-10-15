import { type CardProps } from '@/interfaces/CardProps'
import ImageComponent from './Image'

const CardCountry = ({ img, name }: CardProps) => {
  return (
    <div className="relative group cursor-pointer">
      <ImageComponent
        src={img}
        alt={name}
        width={400}
        height={300}
        className="transition-transform group-hover:scale-105 "
      />
      <span className="text-2xl text-white font-kanit absolute bottom-4 left-5 z-10">
        {name}
      </span>
      <div className="absolute inset-0 bg-black opacity-50 rounded-md" />
    </div>
  )
}

export default CardCountry
