import UiImage from '@/components/shared/Image'

interface CardCountryProps {
	img: string
	name: string
}

const CardCountry = ({ img, name }: CardCountryProps) => {
	return (
		<div className="relative group cursor-pointer">
			<img
				src={img}
				alt={name}
				width={400}
				height={300}
				className="transition-transform group-hover:scale-105 w-full"
			/>
			<span className="text-2xl text-white font-extrabold absolute bottom-4 left-5 z-10">
				{name}
			</span>
			<div className="absolute inset-0 bg-gradient-to-t from-black/80  to-transparent rounded-md" />
		</div>
	)
}

export default CardCountry
