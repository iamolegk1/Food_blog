import React, { forwardRef } from "react";
import { motion } from "framer-motion";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { setActiveFilter } from "../../redux/slices/filter";
import { selectFilter } from "../../redux/slices/filter/selectors";
import { categories } from "./constants";

import styles from "./index.module.scss";

const Filter = forwardRef<HTMLUListElement>((_, ref) => {
  const dispatch = useAppDispatch();
  const { activeFilter } = useAppSelector(selectFilter);

  return (
    <ul ref={ref} className={styles.root}>
      {categories.map((elem, i) => (
        <li
          key={i}
          onClick={() => dispatch(setActiveFilter(elem))}
          className={activeFilter === elem ? `${styles.active}` : ""}
        >
          {elem}
        </li>
      ))}
    </ul>
  );
});

export const MFilter = motion(Filter);
