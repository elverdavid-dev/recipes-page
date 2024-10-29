'use client'
import ImageWrapper from '@/components/shared/common/image-wrapper'
import type { Categories } from '@/types/categories/categories-interface'
import { responsiveOptionsCarusel } from '@/utils/common/responsive-option-carusel'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Carusel = ({ categories }: { categories: Categories[] | undefined }) => {
	return (
		<section>
			<Swiper
				spaceBetween={50}
				slidesPerView={1.25}
				modules={[Autoplay, Pagination]}
				autoplay={{ delay: 4000, pauseOnMouseEnter: true }}
				loop={true}
				breakpoints={responsiveOptionsCarusel}
				pagination={{
					el: '.pagination',
					dynamicBullets: true,
				}}
			>
				{categories?.map(({ name, image, _id }, i) => (
					<SwiperSlide key={_id} virtualIndex={i}>
						<Link href={`/categorias/${_id}?name=${name}`}>
							<section className="group relative w-[230px] md:w-[280px]">
								<ImageWrapper
									src={image}
									alt={name}
									width={280}
									height={188}
									className="rounded-xl w-full"
								/>
								<span className="text-xl text-white font-extrabold absolute bottom-4 left-5 capitalize z-20">
									{name}
								</span>
								<div className="absolute inset-0 bg-gradient-to-t from-black/70  to-transparent rounded-xl z-10" />
							</section>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

export default Carusel
