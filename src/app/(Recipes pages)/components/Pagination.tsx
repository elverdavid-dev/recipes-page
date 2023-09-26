'use client'

import { Pagination } from '@nextui-org/react'
import { useState } from 'react'

interface PaginateProps {
  initialPage: number
  total: number
}

const PaginationComponent = ({ initialPage, total }: PaginateProps) => {
  const [currentPage, setCurrentPage] = useState(initialPage)
  console.log(currentPage)

  return (
    <Pagination
      color="warning"
      size="lg"
      loop
      showShadow
      showControls
      initialPage={initialPage}
      total={total}
      page={currentPage}
      onChange={setCurrentPage}
      className="mt-10 flex justify-center"
    />
  )
}

export default PaginationComponent
