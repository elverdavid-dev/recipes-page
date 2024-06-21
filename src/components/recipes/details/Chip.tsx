'use client'
import type { ChildrenProps } from '@/types/common/children-props'
import { Chip } from '@nextui-org/react'

const ChipComponent = ({ children }: ChildrenProps) => {
	return (
		<Chip
			variant="solid"
			radius="sm"
			size="lg"
			className="text-sm bg-gold text-white"
		>
			{children}
		</Chip>
	)
}

export default ChipComponent
