'use client'
import { NextUIProvider } from '@nextui-org/react'
import { type ChildrenProps } from '@interfaces/ChildrenProps.interface'

const providers = ({ children }: ChildrenProps) => {
  return (
    <>
      <NextUIProvider>{children}</NextUIProvider>
    </>
  )
}

export default providers
