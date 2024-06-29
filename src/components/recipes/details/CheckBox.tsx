'use client'
import type { ChildrenProps } from '@/types/common/children-props'
import { Checkbox } from '@nextui-org/react'

const CheckBoxComponent = ({ children }: ChildrenProps) => {
	return (
		<Checkbox
			lineThrough
			color="default"
			size="lg"
			classNames={{ label: 'text-gray-800' }}
		>
			{children}
		</Checkbox>
	)
}

export default CheckBoxComponent
