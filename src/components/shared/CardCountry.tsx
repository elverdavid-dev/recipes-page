import ImageWrapper from '@/components/shared/Image'

interface CardCountryProps {
	img: string
	name: string
}

const CardCountry = ({ img, name }: CardCountryProps) => {
	return (
		<div className="relative group cursor-pointer">
			<ImageWrapper
				src={img}
				alt={name}
				width={445}
				height={300}
				className="w-full rounded-xl"
			/>
			<span className="text-2xl text-white font-extrabold absolute bottom-4 left-5 z-20 capitalize">
				{name}
			</span>
			<div className="absolute inset-0 bg-gradient-to-t from-black/70  to-transparent rounded-xl z-10" />
		</div>
	)
}

export default CardCountry
