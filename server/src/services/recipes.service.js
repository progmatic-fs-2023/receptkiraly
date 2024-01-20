import * as db from './db.service';

export const listRecipes = async params => {
  let result;
  const { count, userID } = params || {};
  if (!count && !userID) {
    result = await db.query('SELECT * FROM recipes');
  }
  if (count && !userID) {
    result = await db.query('SELECT id FROM recipes ORDER BY created_at DESC LIMIT $1', [count]);
  }
  if (userID && !count) {
    result = await db.query('SELECT id FROM recipes WHERE user_id = $1', [userID]);
  }
  return result.rows;
};

export const getRecipe = async recipeID => {
  const result = await db.query(
    `
  SELECT 
  recipes.name, 
  recipes.description, 
  recipes.img, 
  recipes.time_minutes, 
  recipes.difficulty_level, 
  recipes.serve_count, 
  category.name, 
  main_category.name, 
  labels.name 

  FROM recipes
  
  INNER JOIN recipes_categories 
  ON recipes_categories.categories_recipe_id = recipes.recipe_id 
  
  INNER JOIN category 
  ON category.id = recipes_categories.categories_id 
  
  INNER JOIN main_category 
  ON main_category.id = category.main_category 
  
  INNER JOIN recipes_labels 
  ON recipes_labels.recipe_id = recipes.id 
  
  INNER JOIN labels 
  ON labels.id = recipes_labels.label_id 
  
  WHERE 
  recipes.id = $1
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
    (name, description, img, time_minutes, difficulty_level, serve_count, user_id)
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

  const recipeID = result.rows[0].id;

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
    (recipe_id, label_id)
    VALUES
    ($1, (SELECT id FROM labels WHERE name = $2))
    `,
      [recipeID, recipeLabels[i]],
    );
  }

  return result.rows;
};
