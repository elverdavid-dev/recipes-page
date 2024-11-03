'use client'
import type { Categories } from '@/types/categories/categories-interface'
import { responsiveOptionsCarusel } from '@/utils/common/responsive-option-carusel'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/autoplay'
import ImageWrapper from '@/components/shared/common/image-wrapper'
import type { FC } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

interface Props {
	categories: Categories[]
}

const Carusel: FC<Props> = ({ categories }) => {
	return (
		<section>
			<Swiper
				spaceBetween={50}
				slidesPerView={1.25}
				modules={[Autoplay]}
				autoplay={{ delay: 4000, pauseOnMouseEnter: true }}
				loop={true}
				breakpoints={responsiveOptionsCarusel}
			>
				{categories?.map(({ name, image, _id }, i) => (
					<SwiperSlide key={_id} virtualIndex={i}>
						<Link href={`/categorias/${_id}?name=${name}`}>
							<section className="group relative w-[230px] md:w-[280px]">
								<ImageWrapper
									src={image}
									alt={name}
									width={280}
									className="rounded-3xl w-full"
								/>
								<span className="text-2xl text-gray-300  font-extrabold absolute bottom-3 left-3 capitalize z-20 transition-all">
									{name}
								</span>
								<div className="absolute inset-0 bg-gradient-to-t from-black/70  to-transparent rounded-3xl z-10" />
							</section>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

export default Carusel
