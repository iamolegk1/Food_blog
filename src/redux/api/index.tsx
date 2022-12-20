import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { IresipesTemplate } from "../../types/templateData";
import { RecipesParams } from "./types";

export const getRecipes = createAsyncThunk<IresipesTemplate[], RecipesParams>(
  "recipes/fetchRecipesStatus",
  async (params) => {
    const { filter, currentPage, search } = params;
    const { data } = await axios.get<IresipesTemplate[]>(
      `${process.env.REACT_APP_URI_API}?p=${currentPage}&l=8${filter}${search}`
    );
    return data;
  }
);

export const getDetailedRecipe = createAsyncThunk<
  IresipesTemplate,
  string | undefined
>("detailedRecipe/fetchDetailedRecipeStatus", async (id) => {
  const { data } = await axios.get<IresipesTemplate>(
    `${process.env.REACT_APP_URI_API}/${id}`
  );
  return data;
});
