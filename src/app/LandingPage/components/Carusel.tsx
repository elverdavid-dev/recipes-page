"use client";

import { ChildrenProps } from "@interfaces/ChildrenProps.interface";
import Carusel from "react-multi-carousel";

const CaruselComponent = ({ children }: ChildrenProps) => {
  const Response = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 500,
    },
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
      partialVisibilityGutter: 85,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 2,
      partialVisibilityGutter: -130,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 3,
      partialVisibilityGutter: -40,
    },
  };

  return (
    <Carusel
      responsive={Response}
      infinite
      autoPlay
      autoPlaySpeed={5000}
      removeArrowOnDeviceType={["mobile", "tablet"]}
      partialVisbile
    >
      {children}
    </Carusel>
  );
};

export default CaruselComponent;
