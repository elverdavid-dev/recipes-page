"use client";

import { Pagination } from "@nextui-org/react";

interface PaginateProps {
  initialPage: number;
  total: number;
}
const PaginationComponent = ({ initialPage, total }: PaginateProps) => {
  return (
    <Pagination
      color="warning"
      size="lg"
      variant="bordered"
      loop
      showShadow
      showControls
      initialPage={initialPage}
      total={total}
      className="mt-10 flex justify-center"
    />
  );
};

export default PaginationComponent;
