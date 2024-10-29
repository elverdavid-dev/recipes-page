import { cn } from '@nextui-org/react'
import type { HTMLAttributes } from 'react'

const Subtitle = ({
	children,
	className,
	...props
}: HTMLAttributes<HTMLHeadingElement>) => {
	return (
		<h2
			className={cn('py-4 text-3xl font-extrabold  capitalize', className)}
			{...props}
		>
			{children}
		</h2>
	)
}

export default Subtitle
