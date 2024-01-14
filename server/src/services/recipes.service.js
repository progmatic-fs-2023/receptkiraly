import * as db from './db.service';

export const listRecipes = async count => {
  if (count === undefined) {
    const result = await db.query('SELECT * FROM recipes');
    return result.rows;
  }

  const result = await db.query(
    'SELECT recipe_id FROM recipes ORDER BY recipe_created_at DESC LIMIT $1',
    [count],
  );
  return result.rows;
};

export const listRecipesByUser = async userID => {
  const result = await db.query('SELECT id FROM recipes WHERE user_id = $1', [userID]);
  return result.rows;
};
