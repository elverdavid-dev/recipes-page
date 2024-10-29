'use client'
import type { ChildrenProps } from '@/types/common/children-props'
import { NextUIProvider } from '@nextui-org/react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { useRouter } from 'next/navigation'
const providers = ({ children }: ChildrenProps) => {
	const router = useRouter()
	return (
		<>
			<ProgressBar
				color="#FFAC4B"
				options={{ showSpinner: false }}
				shallowRouting
			/>
			<NextUIProvider navigate={router.push}>
				<NextThemesProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</NextThemesProvider>
			</NextUIProvider>
		</>
	)
}

export default providers
