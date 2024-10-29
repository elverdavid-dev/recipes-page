import Image from 'next/image'
import type { FC } from 'react'

interface Props {
	message: string
}
const NotFound: FC<Props> = ({ message }) => {
	return (
		<section className="mx-auto">
			<p className="font-bold text-2xl mt-10">{message}</p>
			<Image
				src="/404/404-notFound.svg"
				alt="404 not found"
				width={400}
				height={300}
				className="mx-auto"
			/>
		</section>
	)
}

export default NotFound
