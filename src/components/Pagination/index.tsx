import React, { FC } from "react";
import ReactPaginate from "react-paginate";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectPage } from "../../redux/slices/pagination/selectors";
import { setCurrentPage } from "../../redux/slices/pagination";

import styles from "./index.module.scss";

const Pagination: FC = () => {
  const dispatch = useAppDispatch();
  const { currentPage } = useAppSelector(selectPage);

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel="&#10095;"
      previousLabel="&#10094;"
      onPageChange={(event) => dispatch(setCurrentPage(event.selected + 1))}
      pageRangeDisplayed={8}
      pageCount={3}
      forcePage={currentPage - 1}
    />
  );
};

export default Pagination;
