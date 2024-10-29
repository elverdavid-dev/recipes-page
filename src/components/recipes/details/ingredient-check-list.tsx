'use client'
import type { ChildrenProps } from '@/types/common/children-props'
import { Checkbox } from '@nextui-org/react'

const IngredientCheckList = ({ children }: ChildrenProps) => {
	return (
		<Checkbox
			lineThrough
			color="primary"
			size="lg"
			classNames={{ label: 'text-xl' }}
		>
			{children}
		</Checkbox>
	)
}

export default IngredientCheckList
