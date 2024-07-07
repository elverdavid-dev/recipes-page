'use client'
import type { ChildrenProps } from '@/types/common/children-props'
import { Chip } from '@nextui-org/react'

const StepChip = ({ children }: ChildrenProps) => {
	return (
		<Chip
			radius="lg"
			size="lg"
			classNames={{
				base: 'bg-gold text-white',
			}}
		>
			{children}
		</Chip>
	)
}

export default StepChip
