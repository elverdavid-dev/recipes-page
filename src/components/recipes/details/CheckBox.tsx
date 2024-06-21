'use client'
import type { ChildrenProps } from '@/types/common/children-props'
import { Checkbox } from '@nextui-org/react'

const CheckBoxComponent = ({ children }: ChildrenProps) => {
	return (
		<Checkbox lineThrough color="warning" size="lg">
			{children}
		</Checkbox>
	)
}

export default CheckBoxComponent
