import React, { FC } from "react";

import Search from "../../components/Search";
import Filter from "../../components/Filter";
import ListRecipes from "../../components/ListRecipes";

import styles from "./index.module.scss";

const Recipes: FC = () => {
  return (
    <>
      <div className={styles.container}>
        <Search />
      </div>
      <Filter />
      <ListRecipes />
    </>
  );
};

export default Recipes;
