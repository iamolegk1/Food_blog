import React, { FC, useState } from "react";

import { useGetRecipesQuery } from "../../redux/api";
import Loader from "../Loader";
import Pagination from "../Pagination";
import Recipe from "../Recipe";

import styles from "./index.module.scss";

const ListRecipes: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: recipes, isLoading, isError } = useGetRecipesQuery(currentPage);

  if (isLoading) {
    return <Loader />;
  }

  if (isError || !recipes) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <>
      <div className={styles.container}>
        {recipes.map((item) => (
          <Recipe key={item.id} {...item} />
        ))}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </>
  );
};

export default ListRecipes;
