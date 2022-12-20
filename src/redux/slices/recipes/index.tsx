import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getRecipes } from "../../api";
import { IresipesTemplate } from "../../../types/templateData";
import { IrecipesSlice } from "./types";

const initialState: IrecipesSlice = {
  entities: [],
  status: "idle",
};

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setEntities(state, action: PayloadAction<IresipesTemplate[]>) {
      state.entities = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRecipes.pending, (state) => {
      state.status = "pending";
      state.entities = [];
    });

    builder.addCase(getRecipes.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.status = "succeeded";
    });

    builder.addCase(getRecipes.rejected, (state) => {
      state.status = "failed";
      state.entities = [];
    });
  },
});

export const { setEntities } = recipesSlice.actions;

export default recipesSlice.reducer;
