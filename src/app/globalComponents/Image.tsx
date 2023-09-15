"use client";

import Image from "next/image";
import { ImageProps } from "@interfaces/ImageProps.interface";
import { useState } from "react";
import { Skeleton } from "@nextui-org/react";

const ImageComponent = ({ url, name, width, height }: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Skeleton isLoaded={isLoaded} className={`rounded-md `}>
        <Image
          src={url}
          alt={name}
          width={width}
          height={height}
          className="rounded-md mx-auto"
          onLoadingComplete={() => setIsLoaded(!isLoaded)}
        />
      </Skeleton>
    </>
  );
};

export default ImageComponent;
