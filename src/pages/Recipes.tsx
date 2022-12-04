import React, { FC } from "react";

import ListRecipes from "../components/ListRecipes";
const Recipes: FC = () => {
  return (
    <div>
      <h1>Recipes</h1>
      <ListRecipes />
    </div>
  );
};

export default Recipes;
