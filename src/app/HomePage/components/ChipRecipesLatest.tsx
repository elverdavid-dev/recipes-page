'use client'
import { type ChildrenProps } from '@interfaces/ChildrenProps.interface'
import { Chip } from '@nextui-org/react'

interface PropsChip extends ChildrenProps {
	className?: string
}

const ChipRecipesLatest = ({ children, className }: PropsChip) => {
	return (
		<Chip
			variant="flat"
			className={`z-10 absolute top-1 left-1 bg-black/30 text-white font-nunito ${className}`}
		>
			{children}
		</Chip>
	)
}

export default ChipRecipesLatest
