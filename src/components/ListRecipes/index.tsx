import React, { FC } from "react";
import { useGetRecipesQuery } from "../../redux/api";

import loadingGif from "../../assets/waiting.gif";
import Recipe from "../Recipe";

import styles from "./index.module.scss";

const ListRecipes: FC = () => {
  const { data = [], isLoading, isError } = useGetRecipesQuery("");

  if (isLoading) {
    return (
      <img
        className={styles.loader}
        src={loadingGif}
        alt="wait until the page loads"
      />
    );
  }

  if (isError || !data) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <div className={styles.container}>
      {data.map((item) => (
        <Recipe key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ListRecipes;
