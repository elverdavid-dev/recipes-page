'use client'

import type { ChildrenProps } from '@interfaces/ChildrenProps.interface'
import Carusel from 'react-multi-carousel'

const CaruselComponent = ({ children }: ChildrenProps) => {
	const response = {
		mobile: {
			breakpoint: {
				max: 777,
				min: 0,
			},
			items: 2,
			partialVisibilityGutter: -130,
		},
		tablet: {
			breakpoint: {
				max: 1280,
				min: 777,
			},
			items: 3,
			partialVisibilityGutter: -40,
		},
		desktop: {
			breakpoint: {
				max: 3000,
				min: 1280,
			},
			items: 3,
			partialVisibilityGutter: 85,
		},
	}

	return (
		<Carusel
			responsive={response}
			infinite={true}
			autoPlay={true}
			autoPlaySpeed={4000}
			removeArrowOnDeviceType={['mobile', 'tablet']}
			ssr={true}
			partialVisbile={true}
		>
			{children}
		</Carusel>
	)
}

export default CaruselComponent
