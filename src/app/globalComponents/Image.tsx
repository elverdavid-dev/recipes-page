'use client'

import Image from 'next/image'
import { type ImageProps } from '@interfaces/ImageProps.interface'
import { useState } from 'react'
import { Skeleton } from '@nextui-org/react'

const ImageComponent = ({ customStyles, url, name, ...props }: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const { width, height } = props // in props are the native props of the Image component of Next.js
  return (
    <>
      <Skeleton isLoaded={isLoaded} className={'rounded-md '}>
        <Image
          src={url}
          alt={name}
          width={width}
          height={height}
          className={customStyles}
          onLoadingComplete={() => {
            setIsLoaded(!isLoaded)
          }}
        />
      </Skeleton>
    </>
  )
}

export default ImageComponent
