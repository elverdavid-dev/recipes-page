'use client'

import { Skeleton } from '@nextui-org/react'
import Image, { type ImageProps } from 'next/image'
import { useState } from 'react'

/**
 * @description Componente  que muestra una imagen con un esqueleto de carga si la imagen no a cargado por completo.
 */

const UiImage = (props: ImageProps) => {
	const [isLoaded, setIsLoaded] = useState(false)
	const closeSkeleton = () => {
		setIsLoaded(!isLoaded)
	}
	return (
		<>
			<Skeleton isLoaded={isLoaded} className={'rounded-md'}>
				<Image
					{...props}
					// Callback que se ejecuta cuando la imagen se carga completamente.
					onLoad={closeSkeleton}
				/>
			</Skeleton>
		</>
	)
}

export default UiImage
