import { useState } from "react";

export const usePagination = ({
  itemsPerPage = 10,
  initialPage = 1,
  items = [],
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return [
    {
      currentPage,
      currentItems,
      totalPages,
    },
    { setCurrentPage, handleChangePage },
  ];
};
