import { useState } from "react";

export function usePager(rows: number, rpp: number) {
  const [page, setPage] = useState(1);
  const pages = Math.ceil(rows / rpp);
  const row = (page - 1) * rpp;

  const updatePage = (target: number) => {
    if (target < 1) {
      setPage(1);
      return;
    }

    if (target > pages) {
      setPage(pages);
      return;
    }

    setPage(target);
  };

  return { row, updatePage, pages };
}
