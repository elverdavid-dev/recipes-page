'use client'
import { type ChildrenProps } from '@/interfaces/ChildrenProps.interface'
import { Chip } from '@nextui-org/react'

const ChipComponent = ({ children }: ChildrenProps) => {
  return (
    <Chip
      variant="solid"
      radius="sm"
      size="lg"
      className="font-nunito text-sm bg-gold text-white"
    >
      {children}
    </Chip>
  )
}

export default ChipComponent
