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
  labels.label_name 

  FROM recipes
  
  INNER JOIN category 
  ON category.category_id = $1
  
  INNER JOIN main_category 
  ON main_category.main_category_id = category.category_main_category 
  
  INNER JOIN recipes_labels 
  ON recipes_labels.labels_recipe_id = recipes.recipe_id 
  
  INNER JOIN labels 
  ON labels.label_id = recipes_labels.labels_label_id 
  
  WHERE 
  recipes.recipe_id = $1
  `,
    [recipeID],
  );
  return result.rows[0];
};

export const addNewRecipe = async (
  recipeName,
  recipeDescription,
  recipeTimeMinutes,
  recipeDifficultyLevel,
  recipeServeCount,
  recipeCategory,
  recipeLabels,
  imagePath,
  userID,
) => {
  const result = await db.query(
    `
    INSERT INTO recipes
    (recipe_name, recipe_description, recipe_img, recipe_time_minutes, recipe_difficulty_level, recipe_serve_count, user_id)
    VALUES 
    ($1, $2, $3, $4, $5, $6, $7)

    RETURNING *
    `,
    [
      recipeName,
      recipeDescription,
      imagePath,
      recipeTimeMinutes,
      recipeDifficultyLevel,
      recipeServeCount,
      userID,
    ],
  );

  const recipeID = result.rows[0].recipe_id;

  await db.query(
    `
    INSERT INTO recipes_categories
    (categories_recipe_id, categories_category_id)
    VALUES
    ($1, (SELECT category_id FROM category WHERE category_name = $2));
  `,
    [recipeID, recipeCategory],
  );

  for (let i = 0; i < recipeLabels.length; i += 1) {
    db.query(
      `
    INSERT INTO recipes_labels
    (labels_recipe_id, labels_label_id)
    VALUES
    ($1, (SELECT label_id FROM labels WHERE label_name = $2))
    `,
      [recipeID, recipeLabels[i]],
    );
  }

  return result.rows;
};
