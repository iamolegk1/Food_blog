import React, { FC } from "react";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { setActiveFilter } from "../../redux/slices/filter";
import { selectFilter } from "../../redux/slices/filter/selectors";
import { categories } from "./constants";

import styles from "./index.module.scss";

const Filter: FC = () => {
  const dispatch = useAppDispatch();
  const { activeFilter } = useAppSelector(selectFilter);

  return (
    <ul className={styles.root}>
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
};

export default Filter;
