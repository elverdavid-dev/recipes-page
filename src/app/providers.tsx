'use client'
import { type ChildrenProps } from '@interfaces/ChildrenProps.interface'
import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
const providers = ({ children }: ChildrenProps) => {
	const router = useRouter()
	return (
		<>
			<NextUIProvider navigate={router.push}>{children}</NextUIProvider>
		</>
	)
}

export default providers
