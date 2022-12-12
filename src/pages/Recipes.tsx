import React, { FC } from "react";

import Categories from "../components/Categories";
import ListRecipes from "../components/ListRecipes";

const Recipes: FC = () => {
  return (
    <>
      <Categories />
      <ListRecipes />
    </>
  );
};

export default Recipes;
