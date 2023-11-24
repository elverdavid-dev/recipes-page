'use client'
import { Pagination } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

interface PaginateProps {
	currentPage: number
	total: number
}

const PaginationComponent = ({ currentPage, total }: PaginateProps) => {
	const router = useRouter()

	const handlePage = (page: number) => {
		router.push(`/recetas?page=${page}`)
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
			className="mt-10 flex justify-center"
		/>
	)
}

export default PaginationComponent
