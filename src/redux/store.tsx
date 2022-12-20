import { configureStore } from "@reduxjs/toolkit";

import recipes from "./slices/recipes";
import filter from "./slices/filter";
import pagination from "./slices/pagination";
import search from "./slices/search";
import recipe from "./slices/detailedRecipe";

export const store = configureStore({
  reducer: {
    recipes,
    filter,
    pagination,
    search,
    recipe,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
