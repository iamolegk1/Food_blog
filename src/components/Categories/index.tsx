import React, { useState } from "react";

import { categories } from "./constants";

import styles from "./index.module.scss";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const choiceCategory = (index: number) => {
    setActiveCategory(index);
  };

  return (
    <>
      <ul className={styles.root}>
        {categories.map((elem, i) => (
          <li
            key={i}
            onClick={() => choiceCategory(i)}
            className={activeCategory === i ? `${styles.active}` : ""}
          >
            {elem}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Categories;
