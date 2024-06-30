export interface RecipeFilter {
  [key: string]: string | number | undefined
  title?: string
  category?: string
  ingredient?: string
  tags?: string
  prepTime?: string
  cookingTime?: string
}
