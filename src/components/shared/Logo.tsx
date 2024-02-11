'use client'

import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
	return (
		<Link href={'/'} className="flex items-center gap-x-1">
			<Image
				src="/logo.svg"
				alt="logo"
				width="40"
				height="50"
				className="mb-3 w-[40px] h-[50px]"
				priority
			/>
			<h3 className="text-xl font-poppins-bold">GlobalFood</h3>
		</Link>
	)
}

export default Logo
