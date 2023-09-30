import { Pagination } from '@nextui-org/react'

interface PaginateProps {
  currentPage: number
  handlePage: (page: number) => void
  total: number
}

const PaginationComponent = ({
  currentPage,
  handlePage,
  total
}: PaginateProps) => {
  return (
    <Pagination
      color='warning'
      size='lg'
      loop
      showShadow
      showControls
      initialPage={1}
      total={total}
      page={currentPage}
      onChange={handlePage}
      className='mt-10 flex justify-center'
    />
  )
}

export default PaginationComponent
