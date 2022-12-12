import React, { FC } from "react";
import ReactPaginate from "react-paginate";

import styles from "./index.module.scss";

interface IPaginationProps {
  onChangePage: (page: number) => void;
}

const Pagination: FC<IPaginationProps> = ({ onChangePage }) => (
  <ReactPaginate
    className={styles.root}
    breakLabel="..."
    nextLabel="&#10095;"
    previousLabel="&#10094;"
    onPageChange={(event) => onChangePage(event.selected + 1)}
    pageRangeDisplayed={8}
    pageCount={3}
  />
);

export default Pagination;
