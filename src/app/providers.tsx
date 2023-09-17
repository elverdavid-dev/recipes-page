"use client";
import { NextUIProvider } from "@nextui-org/react";
import { ChildrenProps } from "@interfaces/ChildrenProps.interface";

const providers = ({ children }: ChildrenProps) => {
  return (
    <>
      <NextUIProvider>{children}</NextUIProvider>
    </>
  );
};

export default providers;
