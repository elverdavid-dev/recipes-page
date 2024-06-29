import ImageWrapper from '@/components/shared/Image'

interface Props {
	image: string
	name: string
}

const CardCountries = ({ image, name }: Props) => {
	return (
		<div className="relative">
			<ImageWrapper
				src={image}
				alt={name}
				width={400}
				height={300}
				className="w-full rounded-xl"
			/>
			<span className="text-2xl text-white font-extrabold absolute bottom-4 left-5 z-10">
				{name}
			</span>
			<div className="absolute inset-0 bg-gradient-to-t from-black/80  to-transparent rounded-xl" />
		</div>
	)
}

export default CardCountries
