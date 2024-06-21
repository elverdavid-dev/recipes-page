import { cn } from '@/libs/common/utils'
import type { HTMLAttributes } from 'react'

const Subtitle = ({
	children,
	className,
	...props
}: HTMLAttributes<HTMLHeadingElement>) => {
	return (
		<h2
			className={cn(
				'py-10 text-3xl font-extrabold  capitalize flex items-center gap-x-1',
				className,
			)}
			{...props}
		>
			{children}
		</h2>
	)
}

export default Subtitle
