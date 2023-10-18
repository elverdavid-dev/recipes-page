'use client'
import { type ChildrenProps } from '@/interfaces/ChildrenProps.interface'
import { Chip } from '@nextui-org/react'
const ChipRecipesLates = ({ children }: ChildrenProps) => {
  return (
    <Chip
      variant="flat"
      className="z-10 absolute top-2 left-2 bg-black/40 text-white font-nunito"
    >
      {children}
    </Chip>
  )
}

export default ChipRecipesLates
