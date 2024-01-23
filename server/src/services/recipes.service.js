import * as db from './db.service';

const $RECIPE = `  
SELECT
  recipes.id,
  recipes.name AS recipe_name, 
  recipes.description, 
  recipes.img, 
  recipes.time_minutes, 
  recipes.difficulty_level, 
  recipes.serve_count, 
  category.name AS category_name, 
  main_category.name AS main_category_name, 
  labels.name AS label_name

FROM recipes

INNER JOIN category 
  ON category.id = recipes.category_id 

INNER JOIN main_category 
  ON main_category.id = category.main_category 

INNER JOIN recipes_labels 
  ON recipes_labels.recipe_id = recipes.id 

INNER JOIN labels 
  ON labels.id = recipes_labels.label_id`;

export const listRecipes = async params => {
  let result;
  const { count, userID } = params || {};
  if (!count && !userID) {
    result = await db.query(`${$RECIPE};`);
  }
  if (count && !userID) {
    result = await db.query(`${$RECIPE} ORDER BY recipes.created_at DESC LIMIT $1`, [count]);
  }
  if (userID && !count) {
    result = await db.query(
      `${$RECIPE} WHERE recipes.user_id = $1 ORDER BY recipes.created_at DESC`,
      [userID],
    );
  }
  return result.rows;
};

export const getRecipe = async recipeID => {
  const result = await db.query(
    `${$RECIPE}
  WHERE 
  recipes.id = $1
  `,
    [recipeID],
  );
  return result.rows;
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
  const categoryIDobject = await db.query('SELECT id FROM category WHERE name = $1', [
    recipeCategory,
  ]);

  const categoryID = categoryIDobject.rows[0].id;

  const result = await db.query(
    `
    INSERT INTO recipes
    (name, description, img, time_minutes, difficulty_level, serve_count, user_id, category_id)
    VALUES 
    ($1, $2, $3, $4, $5, $6, $7, $8)

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
      categoryID,
    ],
  );

  const recipeID = result.rows[0].id;

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

export const listSearchedRecipes = async params => {
  const { title, category, labels } = params || {};

  let queryString = '';
  const queryParams = [];

  if (title || category || labels !== undefined) {
    queryString += 'WHERE';
  }

  if (title) {
    queryString += ' main_category.name = $1';
    queryParams.push(title);
  }

  if (category) {
    if (queryParams.length > 0) {
      queryString += ' AND';
    }
    queryParams.push(category);
    queryString += ` category.name = $${queryParams.length}`;
  }

  if (labels !== undefined) {
    if (queryParams.length > 0) {
      queryString += ' AND';
    }
    queryParams.push(labels);
    queryString += ` labels.name = ANY($${queryParams.length}::text[])`;
  }

  const result = await db.query(`${$RECIPE} ${queryString}`, queryParams);
  return result.rows;
};
