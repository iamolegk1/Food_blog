import React, { FC } from "react";
import { useGetRecipesQuery } from "../../redux/api";

import Loader from "../Loader";
import Recipe from "../Recipe";

const ListRecipes: FC = () => {
  const { data, isLoading, isError } = useGetRecipesQuery("");

  if (isLoading) {
    return <Loader />;
  }

  if (isError || !data) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <div>
      {data.map((item) => (
        <Recipe key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ListRecipes;
