export interface Recipe {
  [key: string]: string | number | undefined | string[]

  id: number;
  title: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  ingredients: string[];
  steps: string[];
  imageUrl: string;
  rating?: number;
  category?: string;
  tags: string[];
  description?:  string;
}
