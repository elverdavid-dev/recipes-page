import ImageWrapper from '@/components/shared/common/image-wrapper'

interface Props {
	image: string
	name: string
}

const CardCountries = ({ image, name }: Props) => {
	return (
		<div className="relative group cursor-pointer">
			<ImageWrapper
				src={image}
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

export default CardCountries
