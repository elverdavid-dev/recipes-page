'use client'

import { Skeleton } from '@nextui-org/react'
import Image, { type ImageProps } from 'next/image'
import { useState } from 'react'

/**
 * @description Componente de imagen que muestra una imagen con un esqueleto de carga.
 * @param {ImageProps} props - Propiedades del componente.
 * @param {string} props.src - URL de la imagen.
 * @param {number} props.width - Ancho de la imagen.
 * @param {string} props.alt - Texto alternativo de la imagen.
 * @param {number} props.height - Alto de la imagen.
 * @param {string} props.className - Clases CSS adicionales para el componente.
 */

const ImageComponent = ({ src, width, alt, height, className }: ImageProps) => {
	const [isLoaded, setIsLoaded] = useState(false)
	const closeSkeleton = () => {
		setIsLoaded(!isLoaded)
	}
	return (
		<>
			<Skeleton isLoaded={isLoaded} className={'rounded-md'}>
				<Image
					src={src}
					alt={`Imagen ${alt}`}
					width={width}
					height={height}
					className={`${className} h-auto w-auto`}
					// Callback que se ejecuta cuando la imagen se carga completamente.
					onLoad={closeSkeleton}
				/>
			</Skeleton>
		</>
	)
}

export default ImageComponent
