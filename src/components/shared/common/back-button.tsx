'use client'
import { Button, type ButtonProps, Tooltip } from '@nextui-org/react'
import { ArrowLeft01Icon } from 'hugeicons-react'
import Link from 'next/link'

interface Props extends ButtonProps {
	label: string | undefined | string[]
}
const BackButton = ({ label, ...props }: Props) => {
	return (
		<section className="flex items-center gap-x-1">
			<Tooltip content="Regresar" showArrow>
				<Button isIconOnly variant="flat" as={Link} {...props}>
					<ArrowLeft01Icon />
				</Button>
			</Tooltip>
			<h1 className="font-extrabold text-2xl py-0 capitalize">{label}</h1>
		</section>
	)
}

export default BackButton
