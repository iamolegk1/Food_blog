import { IresipesTemplate } from "../../../types/templateData";

export interface IDetailedRecipeSlice {
  recipe: IresipesTemplate | {};
  status: "idle" | "pending" | "succeeded" | "failed";
}
