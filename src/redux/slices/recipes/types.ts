import { IresipesTemplate } from "../../../types/templateData";

export interface IrecipesSlice {
  entities: IresipesTemplate[];
  status: "idle" | "pending" | "succeeded" | "failed";
}
