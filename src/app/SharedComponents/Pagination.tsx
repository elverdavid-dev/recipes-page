'use client'
import { Pagination } from '@nextui-org/react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

interface PaginateProps {
	currentPage: number
	total: number
}

const PaginationComponent = ({ currentPage, total }: PaginateProps) => {
	const router = useRouter()
	const pathName = usePathname()
	const searchParams = useSearchParams()

	const handlePage = (page: number) => {
		const params = new URLSearchParams(searchParams)
		params.set('page', page.toString())
		router.replace(`${pathName}?${params.toString()}`)
	}

	return (
		<Pagination
			color="warning"
			size="lg"
			loop
			showShadow
			showControls
			initialPage={1}
			total={total}
			page={currentPage}
			onChange={handlePage}
			className="mt-10 flex justify-center mx-1"
		/>
	)
}

export default PaginationComponent
