export interface Ingredient {
  name: string;
  qty: string;
}

export interface IresipesTemplate {
  id: number;
  title: string;
  tags: string[];
  description: string;
  cookTime: number;
  ingredients: Ingredient[];
  steps: string[];
  image: string;
  video: string;
}
