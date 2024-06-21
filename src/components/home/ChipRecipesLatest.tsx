'use client'
import { Chip, type ChipProps } from '@nextui-org/react'

const ChipRecipesLatest = ({ children, ...props }: ChipProps) => {
	return (
		<Chip
			variant="flat"
			className="z-10 absolute top-1 left-1 bg-black/45 text-white"
			{...props}
		>
			{children}
		</Chip>
	)
}

export default ChipRecipesLatest
