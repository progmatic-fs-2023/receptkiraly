import * as db from './db.service';

export const listRecipes = async params => {
  let result;
  const { count, userID } = params || {};
  if (!count && !userID) {
    result = await db.query('SELECT * FROM recipes');
  }
  if (count && !userID) {
    result = await db.query(
      'SELECT recipe_id FROM recipes ORDER BY recipe_created_at DESC LIMIT $1',
      [count],
    );
  }
  if (userID && !count) {
    result = await db.query('SELECT recipe_id FROM recipes WHERE user_id = $1', [userID]);
  }
  return result.rows;
};

export const getRecipe = async recipeID => {
  const result = await db.query(
    `
  SELECT 
  recipes.recipe_name, 
  recipes.recipe_description, 
  recipes.recipe_img, 
  recipes.recipe_time_minutes, 
  recipes.recipe_difficulty_level, 
  recipes.recipe_serve_count, 
  category.category_name, 
  main_category.main_category_name, 
  labels.label_name 
  
  INNER JOIN recipes_categories 
  ON recipes_categories.categories_recipe_id = recipes.recipe_id 
  
  INNER JOIN category 
  ON category.category_id = recipes_categories.categories_category_id 
  
  INNER JOIN main_category 
  ON main_category.main_category_id = category.category_main_category 
  
  INNER JOIN recipe_labels 
  ON recipe_labels.labels_recipe_id = recipes.recipe_id 
  
  INNER JOIN labels 
  ON labels.label_id = recipe_labels.labels_label_id 
  
  WHERE 
  recipes.recipe_id = $1
  `,
    [recipeID],
  );
  return result.rows[0];
};
