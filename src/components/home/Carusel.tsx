'use client'
import UiImage from '@/components/shared/Image'
import { ResponsiveOptions } from '@/libs/common/ResponsiveCaruselOptions'
import type { Categories } from '@/types/categories/categories-interface'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ShowRecipesOneCategory from './ShowRecipesOneCategory'

const Carusel = ({ categories }: { categories: Categories[] | undefined }) => {
	return (
		<section>
			<Swiper
				spaceBetween={50}
				slidesPerView={1.25}
				modules={[Autoplay, Pagination]}
				autoplay={{ delay: 4000 }}
				loop={true}
				breakpoints={ResponsiveOptions}
				pagination={{
					el: '.pagination',
					dynamicBullets: true,
				}}
			>
				{categories?.map(({ name, image, _id }, i) => (
					<SwiperSlide key={_id} virtualIndex={i}>
						<ShowRecipesOneCategory id={_id} category={name}>
							<section className="group">
								<img
									src={image}
									alt={name}
									width={264}
									height={188}
									className="hover:scale-[1.03] transition-all rounded-md w-[230px] h-[150px] md:w-[264px] md:h-[188px]"
								/>
								<span className="text-xl text-slate-950 block py-2 group-hover:text-gold transition-all ">
									{name}{' '}
								</span>
							</section>
						</ShowRecipesOneCategory>
					</SwiperSlide>
				))}
			</Swiper>
			<section className="flex justify-center mt-2 pl-16">
				<div className="pagination" />
			</section>
		</section>
	)
}

export default Carusel
