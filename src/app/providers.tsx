'use client'
import { type ChildrenProps } from '@interfaces/ChildrenProps.interface'
import { NextUIProvider } from '@nextui-org/react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import { useRouter } from 'next/navigation'
const providers = ({ children }: ChildrenProps) => {
	const router = useRouter()
	return (
		<>
			<ProgressBar
				color="#FFAC4B"
				height="4px"
				options={{ showSpinner: false }}
				shallowRouting
			/>
			<NextUIProvider navigate={router.push}>{children}</NextUIProvider>
		</>
	)
}

export default providers
