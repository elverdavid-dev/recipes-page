'use client'

import { type ImageProps } from '@interfaces/ImageProps.interface'
import { Skeleton } from '@nextui-org/react'
import Image from 'next/image'
import { useState } from 'react'

const ImageComponent = ({ customStyles, url, name, ...props }: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const { width, height, src, alt, className } = props // in props are the native props of the Image component of Next.js
  return (
    <>
      <Skeleton isLoaded={isLoaded} className={'rounded-md '}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          onLoadingComplete={() => {
            setIsLoaded(!isLoaded)
          }}
        />
      </Skeleton>
    </>
  )
}

export default ImageComponent
