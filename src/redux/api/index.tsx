import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IresipesTemplate } from "../../types/templateData";

export const recipesApi = createApi({
  reducerPath: "recipesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6377bfb45c477765122610ad.mockapi.io/",
  }),
  endpoints: (builder) => ({
    getRecipes: builder.query<IresipesTemplate[], string>({
      query: () => `recipes`,
    }),
  }),
});

export const { useGetRecipesQuery } = recipesApi;
