'use client'

import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
	return (
		<Link href={'/'} className="flex items-center gap-x-2">
			<h3 className="text-lg font-readexPro">GlobalFood</h3>
			<Image
				src="/logo.svg"
				alt="logo"
				width="40"
				height="50"
				className="mb-3 w-[40px]"
			/>
		</Link>
	)
}

export default Logo
