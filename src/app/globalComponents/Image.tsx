'use client'

import { Skeleton } from '@nextui-org/react'
import Image, { type ImageProps as ImagePropsNextJS } from 'next/image'
import { useState } from 'react'

const ImageComponent = ({
  src,
  width,
  alt,
  height,
  className
}: ImagePropsNextJS) => {
  const [isLoaded, setIsLoaded] = useState(false)
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
