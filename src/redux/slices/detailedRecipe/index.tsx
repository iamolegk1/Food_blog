import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getDetailedRecipe } from "../../api";
import { IresipesTemplate } from "../../../types/templateData";
import { IDetailedRecipeSlice } from "./types";

const initialState: IDetailedRecipeSlice = {
  recipe: {},
  status: "idle",
};

export const detailedRecipeSlice = createSlice({
  name: "detailedRecipe",
  initialState,
  reducers: {
    setRecipe(state, action: PayloadAction<IresipesTemplate>) {
      state.recipe = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDetailedRecipe.pending, (state) => {
      state.status = "pending";
      state.recipe = [];
    });

    builder.addCase(getDetailedRecipe.fulfilled, (state, action) => {
      state.recipe = action.payload;
      state.status = "succeeded";
    });

    builder.addCase(getDetailedRecipe.rejected, (state) => {
      state.status = "failed";
      state.recipe = [];
    });
  },
});

export const { setRecipe } = detailedRecipeSlice.actions;

export default detailedRecipeSlice.reducer;
