'use client'

import { useSearchParams } from 'next/navigation'

const DynamicTitle = ({ message }: { message: string }) => {
	const searchParam = useSearchParams()
	const name = searchParam.get('name')
	return (
		<h1 className="font-readexPro lg:text-3xl text-2xl text-slate-950 capitalize text-center pt-16">
			{`${message}${name}`}
		</h1>
	)
}

export default DynamicTitle
