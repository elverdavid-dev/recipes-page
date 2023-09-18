"use client";

import { Pagination } from "@nextui-org/react";
import { useState } from "react";
import { GetAllRecipes } from "../functions/GetAllRecipes";

interface PaginateProps {
  initialPage: number;
  total: number;
}

const PaginationComponent = ({ initialPage, total }: PaginateProps) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  console.log(currentPage);

  const fetchDataForPage = async () => {
    try {
      const data = await GetAllRecipes(currentPage);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  fetchDataForPage();
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
  );
};

export default PaginationComponent;
